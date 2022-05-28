import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const [count, setCount] = useState(1);
  let newRef = React.createRef();

  let onAddPost = () => {
    let text = newRef.current.value;
    if (text) {
      props.addPost(text);
    }
  };
  let onUpdateText = () => {
    let text = newRef.current.value;

    props.updateText(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.title}></div>
      <div className={s.input}>
        <textarea
          ref={newRef}
          placeholder="Your News..."
          onChange={onUpdateText}
          value={props.newPostText}
        />
      </div>
      <button className={s.btn} onClick={onAddPost}>
        Send
      </button>
      {props.posts.map((e) => (
        <Post text={e.text} likeCount={e.count} />
      ))}
    </div>
  );
}

export default MyPosts;
