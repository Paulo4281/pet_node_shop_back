import { config } from "dotenv"
import swaggerAutogen from "swagger-autogen"
import { resolve } from "path"
import * as TJS from "typescript-json-schema"

config()

const UserDTO = TJS.buildGenerator(
    TJS.getProgramFromFiles([
        resolve("./src/modules/user/dtos/IUserDTO.ts")
    ])
)

const doc = {
    info: {
        title: process.env.APP_TITLE,
        description: process.env.APP_DESCRIPTION
    },
    host: process.env.APP_URL,
    schemes: ["http", "https"],
    "@definitions": {
        // User
        IUser: UserDTO?.getSchemaForSymbol("IUser"),
        IUserDTO: UserDTO?.getSchemaForSymbol("IUserDTO"),
        IUserUpdateDTO: UserDTO?.getSchemaForSymbol("IUserUpdateDTO"),
        IUserResponseDTO: UserDTO?.getSchemaForSymbol("IUserResponseDTO"),
        IUserResponseDTOList: {
            type: "array",
            items: { $ref: "#/definitions/IUserResponseDTO" }
        }
    }
}

const outputFile = "./swagger.json"
const endpointFiles = ["./src/routes/index.ts"]

swaggerAutogen(outputFile, endpointFiles, doc)