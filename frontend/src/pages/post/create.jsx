import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = import.meta.env.VITE_API_URL;

function createPost() {
    const navigate = useNavigate();

  //Add a new post
 function handleAddPost(event) {
  event.preventDefault();

  const title = event.target[0].value;
  const content = event.target[1].value;

  fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ title, content })
  })
    .then(response => response.json())
    .then(newPost => {
      setPosts(prevPosts => [...prevPosts, newPost]);

      navigate('/posts');
    })
    .catch(error => console.error('Error adding post:', error));
}




  return (
    <>
    <main className="flex flex-col items-center min-h-screen justify-center bg-gray-100">
      <h1 className="text-3xl font-bold underline">
        New Post
      </h1>

      <section className="flex flex-col items-center justify-center bg-gray-100">
        <h2 className='text-2xl font-bold mb-4'>Add Post</h2>
          <form className='flex flex-col items-center' onSubmit={handleAddPost}>
            <input type="text" placeholder='Title' className='mb-2 p-2 border rounded' />
            <input type="text" placeholder='Content' className='mb-2 p-2 border rounded' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Save Post</button>
          </form>
      </section>
    </main>
    </>
  )
}


export default createPost