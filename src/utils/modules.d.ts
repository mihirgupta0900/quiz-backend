import UserModel from "../entity/user"

declare global {
  export namespace Express {
    export interface User extends UserModel {}
    export interface Request {
      user?: User
    }
  }
}
