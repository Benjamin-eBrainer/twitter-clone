import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, Verified } from '@mui/icons-material'

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rafeh Qazi{""} <span className='post__headerSpecial'>
                <Verified className='post__badge' />
                @cleverqazi
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter clone with React</p>
          </div>
          <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize='small' />
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <Publish fontSize='small' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
