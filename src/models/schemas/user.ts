import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

export const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String
}, {
  timestamps: true,
});
UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
