import IUser from "./user"
import IComment from "./comment"

export default interface IData {
  currentUser: Partial<IUser>
  comments: Array<Partial<IComment>>
}
