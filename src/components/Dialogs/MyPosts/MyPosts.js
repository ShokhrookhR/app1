import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
	 <div className={s.posts}>
	 	<div className={s.title}></div>
	 	<div className={s.input}>
			 <input type="text" placeholder='Your News...' />
			 
		 </div>
		 <button className={s.btn}>Send</button>
		 <Post likeCount='15'/>
		 <Post likeCount='6'/>
		 
	 </div>
  )
}

export default MyPosts