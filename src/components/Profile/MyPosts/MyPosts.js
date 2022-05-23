import React, { useState } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  const [count, setCount] = useState(1);
  let newRef = React.createRef();

  let addPost = () => {
    let text = newRef.current.value;
    if (text) {
      props.addPost(text);
    }

    // newRef.current.value = '';
  };
  let updateText = () => {
    let text = newRef.current.value;
    props.updatePostText(text);
   
    
  };

  return (
    <div className={s.posts}>
      <div className={s.title}></div>
      <div className={s.input}>
        <textarea ref={newRef} placeholder="Your News..." onChange={updateText} value={props.newPostText}/>
      </div>
      <button className={s.btn} onClick={addPost} >
        Send
      </button>
      {props.posts.map((e) => (
        <Post text={e.text} likeCount={e.count} />
      ))}
    </div>
  );
}

export default MyPosts;
