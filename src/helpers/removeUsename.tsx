type AppProps = {
  text: string;
};

const pattern = /^@\w+\s/;

const removeUsername = (text: string) => {
  return text.replace(pattern, "");
};

export default removeUsername;
