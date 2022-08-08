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
    replyingTo,
    user,
  };
};

export default createReply;
