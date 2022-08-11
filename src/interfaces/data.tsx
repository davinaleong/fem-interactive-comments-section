import IUser from "./user"
import IComment from "./comment"

export default interface IData {
  currentUser: IUser
  comments: Array<IComment>
}
