import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserDTO, IUserResponseDTO, IUserUpdateDTO } from "../../dtos/IUserDTO";
import { Document, model } from "mongoose";
import { Model } from "mongoose";
import { User } from "../../models/schemas/User";
import { IUser } from "../../models/interfaces/IUser";

class UserRepository implements IUserRepository {

    private repository: Model<IUser>

    constructor() {
        this.repository = model("User")
    }

    async save(data: IUserDTO): Promise<Document> {
        return this.repository.create(data)
    }

    async find(): Promise<Document[]> {
        return this.repository.find()
    }

    async findById(id: string): Promise<Document> {
        return this.repository.findById(id)
    }

    async update(id: string, data: IUserUpdateDTO): Promise<void> {
        await this.repository.findByIdAndUpdate(id, { ...data })
    }

    async delete(id: string): Promise<void> {
        await this.repository.findByIdAndDelete(id)
    }

}

export {
    UserRepository
}