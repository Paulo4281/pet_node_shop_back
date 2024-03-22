import { IUserDTO, IUserUpdateDTO } from "../../dtos/IUserDTO"
import { Document } from "mongoose"

interface IUserRepository {
    save(data: IUserDTO): Promise<Document>
    find(): Promise<Document[]>
    findById(id: string): Promise<Document>
    update(id: string, data: IUserUpdateDTO): Promise<void>
    delete(id: string): Promise<void>
}

export {
    IUserRepository
}