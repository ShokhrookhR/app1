import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  const [count, setCount] = useState(1);

  return (
    <div className={s.posts}>
      <div className={s.title}></div>
      <div className={s.input}>
        <textarea placeholder="Your News..." />
      </div>
      <button className={s.btn}>Send</button>
      {props.posts.map((e) => (
        <Post text={e.text} likeCount={e.count}  />
      ))}
    </div>
  );
}

export default MyPosts;
