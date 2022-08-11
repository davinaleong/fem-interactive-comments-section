import User from "./user"

export default interface Reply {
  id: Number
  content: string
  createdAt: string
  score: Number
  replyingTo: string
  user: User
}
