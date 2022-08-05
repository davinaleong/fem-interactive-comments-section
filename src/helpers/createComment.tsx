const createComment = (
  id: Number,
  content: string,
  createdAt: string,
  score: Number,
  user: object,
  replies: any[]
) => {
  return {
    id,
    content,
    createdAt,
    score,
    user,
    replies,
  };
};

export default createComment;
