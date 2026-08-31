import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL


function Home() {
  const [posts, setPosts] = useState([])

  // Get stored posts
  useEffect(() => {
    fetch(`${API_URL}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  function handleDeletePost(postId) {
  fetch(`${API_URL}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(()=> setPosts(prevPosts => prevPosts.filter(post => post._id !== postId)))
  .catch(error => console.error('Error deleting post:', error))
}

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            DevBlog Solutions
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Recent Posts
          </h2>
        </div>

        <ul className="space-y-6">
          {[...posts].reverse().map(post => (
            <li
              key={post._id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <article>
                <h3 className="text-2xl font-bold text-slate-900">
                  {post.title}
                </h3>

                <div className="mt-3 text-sm text-slate-500">
                  DevBlog Solutions
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {post.content}
                </p>

                <div className='flex flex-row gap-4'>
                <Link
                  className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  to={`/show/${post._id}`}
                >
                  Read More
                </Link>

                <Link
                  className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  to={`/edit/${post._id}`}
                >
                  Edit
                </Link>

                <button
                  className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  onClick={() => handleDeletePost(post._id)}
                >
                  Delete
                </button>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <h3 className="text-xl font-semibold text-slate-800">
              No posts yet
            </h3>
            <p className="mt-2 text-slate-500">
              Check back soon for new articles.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Home