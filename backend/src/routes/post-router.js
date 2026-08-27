const express = require('express')
const router = express.Router()
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/post-controller')

// const { model } = require('mongoose')
// const Order = require('../models/Tasks.js')

// routes
router.get('/', getAllPosts)

router.get('/:id', getPostById)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

module.exports = router