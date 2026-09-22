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
      <div className='tablefetch'>
        <table>
          <thead>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <PostsApp />
    </>
  )
}

export default App
