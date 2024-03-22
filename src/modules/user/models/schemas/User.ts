import { Schema, Model, model } from "mongoose"
import { IUser } from "../interfaces/IUser"


const UserSchema = new Schema<IUser, Model<IUser>>({
    name: { type: Schema.Types.String, required: true },
    mail: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    birth: { type: Schema.Types.Date, required: false },
    createdAt: { type: Schema.Types.Date, required: true }
}, { versionKey: false })

const User = model("User", UserSchema)

export {
    User
}