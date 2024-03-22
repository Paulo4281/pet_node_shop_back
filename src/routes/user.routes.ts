import { Router } from "express"
import { UserController } from "../modules/user/controllers/UserController"

const userRoutes = Router()
const userController = new UserController()

// User
userRoutes.post(
    "/",
    userController.save
    /*
        #swagger.tags = ["User"]
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: { $ref: "#/definitions/IUserDTO" }
        }
        #swagger.responses[201] = {
            schema: { $ref: "#/definitions/IUserResponseDTO" }
        }
    */
)
userRoutes.get(
    "/",
    userController.find
    /*
        #swagger.tags = ["User"]
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IUserResponseDTOList" }
        }
    */
)
userRoutes.get(
    "/:id",
    userController.findById
    /*
        #swagger.tags = ["User"]
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IUserResponseDTO" }
        }
    */
)
userRoutes.put(
    "/:id",
    userController.update
    /*
        #swagger.tags = ["User"]
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: { $ref: "#/definitions/IUserUpdateDTO" }
        }
        #swagger.responses[204]
    */
)
userRoutes.delete(
    "/:id",
    userController.delete
    /*
        #swagger.tags = ["User"]
        #swagger.responses[204]
    */
)

export {
    userRoutes
}