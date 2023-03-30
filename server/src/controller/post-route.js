import express from "express";
import postRepository from "../repository/post-repository.js";

const router = express.Router();

// Get all posts
router.get("/", async (req, res, next) => {
  try {
    let posts = await postRepository.getAllPosts();
    return res.status(200).send(posts);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new post
router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newPost = await postRepository.createPost(body);
    return res.send(newPost);
  } catch (error) {
    return next({ status: 500, message: error });
  }
});

// Get a single post by id
router.get("/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const selectedPost = await postRepository.getPostById(postId);
    if (selectedPost === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      });
    return res.status(200).send(selectedPost);
  } catch (err) {
    return next({ status: 500, message: err });
  }
});

// Edit a post
router.put("/posts/:id", async (request, response) => {
  const postId = request.params.id;
  const aPost = request.body;
  await changePostInfo(postId, aPost);
  response.status(200).json();
});

//delete a post by id
router.delete("/posts/:id", async (request, response) => {
  const postId = request.params.id;
  await deletePostById(postId);
  response.status(200).json();
});

export default router;
