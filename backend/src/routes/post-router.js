const express = require('express')
const router = express.Router()
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/post-controller')
const authorization = require('../middleware/authorization.js')

// const { model } = require('mongoose')
// const Order = require('../models/Tasks.js')

// routes
router.get('/', getAllPosts)

router.get('/:id', authorization, getPostById)

router.post('/', authorization, createPost)

router.put('/:id', authorization, updatePost)

router.delete('/:id', authorization, deletePost)

module.exports = router