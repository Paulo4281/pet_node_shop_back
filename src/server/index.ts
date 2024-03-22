import cors from "cors"
import { config } from "dotenv"
import express, { NextFunction, Request, Response } from "express"
import "reflect-metadata"
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../../swagger.json"
import "express-async-errors"
import { router } from "../routes"
import { AppError } from "../utils/errors/AppError"
import { dbMongo } from "../database"
import "../container"

config()

dbMongo.on("error", (error) => { console.error("Error while trying to establish Mongo database connection.") })
dbMongo.once("open", () => {
    console.log("Mongo Database Successfully Connected!")
})

const app = express()

app.use(express.json())
app.use(cors())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                message: error.message
            })
        }
        return response.status(500).json({
            message: "Internal server error."
        })
    }
)

app.get("/", (request: Request, response: Response, next: NextFunction) => {
    return response.json({ message: "API Successfully Connected!" })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})