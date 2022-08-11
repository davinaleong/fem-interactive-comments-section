import IUser from "./user"
import IReply from "./reply"

export default interface IComment {
  id: number
  content: string
  createdAt: string
  score: number
  user: IUser
  replies: Array<IReply>
}
