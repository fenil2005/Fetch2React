import { useEffect, useState } from 'react'
import './App.css'
import { PostsApp } from './Posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fenilfetch = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) throw new Error("Response Not Found")
        const data = await response.json();
        setPosts(data);

      } catch (error) {
        console.log("Something Error", error);
      }
    }
    fenilfetch();
  }, [])

  return (
    <>
      <h1>Posts Data</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>{post.id} == {post.title}</li>
          )
        })}
      </ul>
      <PostsApp />
    </>
  )
}

export default App
