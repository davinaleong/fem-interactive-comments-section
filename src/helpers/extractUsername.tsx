const pattern = /^@\w+\s/

const extractUsername = (text: string): any => {
  return pattern.exec(text)
}

export default extractUsername
