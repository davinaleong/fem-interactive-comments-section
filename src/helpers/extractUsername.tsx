const pattern = /^@\w+\s/;

const extractUsername = (text: string) => {
  return pattern.exec(text);
};

export default extractUsername;
