import User from "./user"
import Comment from "./comment"

export default interface Data {
  currentUser: User
  comments: Array<Comment>
}
