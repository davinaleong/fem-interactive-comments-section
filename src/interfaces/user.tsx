import IImage from "./image"

export default interface IUser {
  image: Partial<IImage>
  username: string
}
