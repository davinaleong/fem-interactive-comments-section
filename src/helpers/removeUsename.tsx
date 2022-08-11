const pattern = /^@\w+\s/

const removeUsername = (text: string): any => {
  return text.replace(pattern, "")
}

export default removeUsername
