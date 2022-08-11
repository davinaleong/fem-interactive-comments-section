import IUser from "./user"

export default interface IReply {
  id: number
  content: string
  createdAt: string
  score: number
  replyingTo: string
  user: IUser
}
