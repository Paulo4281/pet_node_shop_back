import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../repository/interfaces/IUserRepository"
import { IUserDTO, IUserResponseDTO, IUserUpdateDTO } from "../dtos/IUserDTO"
import { User } from "../models/schemas/User"
import { Document } from "mongoose"
import { AppError } from "../../../utils/errors/AppError"

@injectable()
class UserService {

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async save(data: IUserDTO): Promise<Document> {
        const user = new User({
            name: data.name,
            mail: data.mail,
            password: data.password,
            birth: data.birth,
            createdAt: new Date()
        })

        return this.userRepository.save(user)
    }

    async find(): Promise<Document[]> {
        return this.userRepository.find()
    }

    async findById(id: string): Promise<Document> {
        const user = this.userRepository.findById(id)
        if (!user) {
            throw new AppError("Not found.", 404)
        }
        return user
    }

    async update(id: string, data: IUserUpdateDTO): Promise<void> {
        await this.findById(id)
        await this.userRepository.update(id, data)
    }

    async delete(id: string): Promise<void> {
        await this.findById(id)
        await this.userRepository.delete(id)
    }

}

export {
    UserService
}