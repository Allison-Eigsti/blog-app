import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const API_URL = import.meta.env.VITE_API_URL

function Edit() {
  const { postId } = useParams()

  const [post, setPost] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const navigate = useNavigate()


  useEffect(() => {
    fetch(`${API_URL}/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setPost(data)
        setTitle(data.title)
        setContent(data.content)
      })
      .catch(error => console.error('Error fetching post:', error))
  }, [postId])

  function handleEditPost(event) {
    event.preventDefault()

    fetch(`${API_URL}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title,
        content
      })
    })
      .then(response => response.json())
      .then(data => {
        setPost(data)
      })
        .then(() => {
        navigate('/')
      })
      .catch(error => console.error('Error editing post:', error))
  }

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Edit Post
        </h1>

        <form onSubmit={handleEditPost} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Content
            </label>

            <textarea
              value={content}
              onChange={event => setContent(event.target.value)}
              rows="10"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Save Changes
            </button>

            <Link
              to={`/show/${postId}`}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </Link>

            <Link
              to={`/`}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Return to Posts
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Edit
