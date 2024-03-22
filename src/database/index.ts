import mongoose from "mongoose"
import { config } from "dotenv"

config()

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}`
)

const dbMongo = mongoose.connection

export {
    dbMongo
}