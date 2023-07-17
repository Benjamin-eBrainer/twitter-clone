import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { postsCollection } from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault()
    addDoc(postsCollection, {
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      timestamp: serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
      avatar: ""
    })
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
            <Avatar />
            <input 
              type="text" 
              placeholder="What's happening?" 
              value={tweetMessage}
              onChange={e => setTweetMessage(e.target.value)}
            />
        </div>
        <input 
          className='tweetBox__imageInput' 
          type="text" placeholder="Optional: Enter image URL" 
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
        />
        <Button className='tweetBox__tweetButton' type='submit'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
