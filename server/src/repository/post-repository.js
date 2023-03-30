import Post from "../model/post-model.js";

const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

const createPost = async (pPost) => {
  const newPost = await Post.create(pPost);
  return newPost;
};
const getPostById = async (postId) => {
  const post = await Post.findOne({ where: { id: postId } });
  return post;
};

async function changePostInfo(pPostId) {
  await Post.update({
    where: {
      id: pPostId,
    },
  });
}

async function deletePostById(pPostId) {
  await Post.destroy({
    where: {
      id: pPostId,
    },
  });
}

export default {
  getAllPosts,
  createPost,
  getPostById,
  changePostInfo,
  deletePostById,
};
