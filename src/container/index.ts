import { container } from "tsyringe"

import { IUserRepository } from "../modules/user/repository/interfaces/IUserRepository"
import { UserRepository } from "../modules/user/repository/implementations/UserRepository"

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)