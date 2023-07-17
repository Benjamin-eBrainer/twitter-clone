import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'

function Feed() {
  const [posts, setPosts] = useState([])

  const postsCollection = collection(db, "posts")

  useEffect(() => {
    onSnapshot(postsCollection, snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
    console.log(posts)
  }, [])

  return (
    <div className='feed'>
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        {
          posts.map((post, index) => {
            return <Post key={index} {...post} />
          })
        }
        <Post 
          displayName="Cyberspace xplr"
          username="eBrainer"
          verified={true}
          timestamp=""
          text="Surfing the web"
          image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          avatar=""
        />
    </div>
  )
}

export default Feed
