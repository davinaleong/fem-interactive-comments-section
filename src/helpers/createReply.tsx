const createReply = (
  id: Number,
  content: string,
  createdAt: string,
  score: Number,
  replyingTo: string,
  user: object
) => {
  return {
    id,
    content,
    createdAt,
    score,
    replyingTo: replyingTo.username !== `undefined` ? replyingTo.username : ``,
    user,
  };
};

export default createReply;
