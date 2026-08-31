import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL

function CreatePost() {
  const navigate = useNavigate()

  function handleAddPost(event) {
    event.preventDefault()

    const title = event.target[0].value
    const content = event.target[1].value

    fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ title, content })
    })
      .then(response => response.json())
      .then(() => {
        navigate('/')
      })
      .catch(error => console.error('Error adding post:', error))
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Create a New Post
          </h1>
        </div>

        <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <form
            className="space-y-6"
            onSubmit={handleAddPost}
          >
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Title
              </label>

              <input
                id="title"
                type="text"
                placeholder="Enter your post title"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Content
              </label>

              <textarea
                id="content"
                placeholder="Write your post..."
                rows="12"
                className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex gap-4 border-t border-slate-100 pt-6">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Publish Post
              </button>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default CreatePost