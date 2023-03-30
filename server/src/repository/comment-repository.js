import Comment from "../model/comment-model.js";

const getAllComments = async () => {
  const comments = await Comment.findAll();
  return comments;
};

export default {
  getAllComments,
};
