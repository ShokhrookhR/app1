import React from 'react'
import s from './Post.module.css'

function Post(props) {
  return (
	 <div className={s.post}>
		<div className={s.img}>
			<img src="https://picsum.photos/50/50"/>
		</div>
		<div className={s.body}>
			<div className={s.text}>
				Lorem ipsum dolor sit amet.
			</div>
			<div className={s.likes}>
				<span>{props.likeCount}</span>
			</div>
		</div>
	 </div>
  )
}

export default Post