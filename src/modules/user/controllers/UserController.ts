import { Request, Response } from "express"
import { container } from "tsyringe"
import { UserService } from "../services/UserService"

class UserController {

    async save(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const object = await service.save(request.body)
        return response.json(object)
    }

    async find(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const objects = await service.find()
        return response.json(objects)
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const service = container.resolve(UserService)
        const object = await service.findById(id)
        return response.json(object)
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const service = container.resolve(UserService)
        await service.update(id, request.body)
        return response.send()
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const service = container.resolve(UserService)
        await service.delete(id)
        return response.send()
    }

}

export {
    UserController
}