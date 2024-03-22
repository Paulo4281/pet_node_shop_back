import { IUser } from "../models/interfaces/IUser"

interface IUserDTO extends Omit<IUser, "createdAt"> {}

interface IUserResponseDTO extends IUser {}

interface IUserUpdateDTO extends IUserDTO {}

export {
    IUserDTO,
    IUserResponseDTO,
    IUserUpdateDTO
}
