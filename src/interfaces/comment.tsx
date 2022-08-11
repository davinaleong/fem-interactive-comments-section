import User from "./user"
import Reply from "./reply"

export default interface Comment {
  id: Number
  content: string
  createdAt: string
  score: Number
  user: User
  replies: Array<Reply>
}
