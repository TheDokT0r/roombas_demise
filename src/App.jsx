import axios from 'axios';
import { useEffect, useState, } from 'react';
import './App.css'


export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://fuck-roomba.onrender.com/')
      .then(res => {
        setData(res.data);
      })
  }, [])

  console.log(data);

  if (!data) {
    return (
      <div>
        <h1>Fetching Roomba...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Roomba's Demise</h1>
      <div>
        <h3>Top Posts</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.posts.map((post, index) => (
            <li key={index}>
              <div className='post_container'>
                <p><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title || 'Placeholder Title'}</a></p>
                <p>{post.upvotes} upvotes</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Top comments</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.replies.map((reply, index) => (
            <li key={index}>
              <div className='post_container'>
                <p><a href={reply.url} target="_blank" rel="noopener noreferrer">{reply.title || 'Placeholder Title'}</a></p>
                <p>{reply.upvotes} upvotes</p>
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div>
        <h3>Most recent bans</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {data.recent_bans.map((reply, index) => (
            <li key={index}>
              <div className='post_container'>
                <p><a href={reply.url} target="_blank" rel="noopener noreferrer">{reply.title || 'Placeholder Title'}</a></p>
                <p>{reply.upvotes} upvotes</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>I know the app looks like shit. I'm a backend developer lol</footer>
    </div>
  )
}