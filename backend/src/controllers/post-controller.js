const Post = require('../models/post.js')

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find()
        return res.json(posts)

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ message: "Post does not exist" })
        }

        return res.json(post)

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}


async function createPost(req, res) {
    try {
        const { title, content } = req.body
        const author = req.user.id
        const newPost = new Post({ title, content, author })
        await newPost.save()

        res.status(201).json(newPost)

    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function updatePost(req, res) {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        if (req.body.title !== undefined) {
            post.title = req.body.title
        }

        if (req.body.content !== undefined ) {
            post.content = req.body.content
        }

        await post.save()

        res.json(post)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


async function deletePost(req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        res.json({ message: "Post deleted successfully" })

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}



module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}