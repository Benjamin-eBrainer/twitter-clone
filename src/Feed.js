import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import { postsCollection } from './firebase'
import { onSnapshot } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    onSnapshot(postsCollection, snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className='feed'>
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        <FlipMove>
          {
            posts.map((post, index) => {
              return <Post key={index} {...post} />
            })
          }
        </FlipMove>
    </div>
  )
}

export default Feed
