const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Post } = require('../../db/models');

const router = express.Router();

router.get('/',
  asyncHandler (async (req, res) => {
      const posts = await Post.findAll({
        include: User,
        order: [['createdAt', 'ASC']]
       
      }
      );
      return res.json({posts})
  })
)

router.post('/', 
  asyncHandler (async (req, res) => {
    const userId = req.body.userId;
    const body = req.body.post;
    try{
      const newPost = await Post.create({
        body,
        userId
      });

      return res.json(newPost);
    }
    catch(error){
      return res.json(error)
    }
  })
);

router.delete('/', 
  asyncHandler (async (req, res) => {
    const postId = req.body.postId
    const post = await Post.findByPk(postId)
    await post.destroy()
    res.json({msg: 'success'})
  })
)

module.exports = router;