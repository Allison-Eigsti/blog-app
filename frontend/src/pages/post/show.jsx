import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Show() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/posts/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

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
    <main className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-2xl font-bold text-slate-900">{post.title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{post.content}</p>

      <div className="flex flex-row gap-4">
        <Link
          className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          to={`/edit/${post._id}`}
        >
          Edit
        </Link>
      </div>
    </main>
  );
}

export default Show;
