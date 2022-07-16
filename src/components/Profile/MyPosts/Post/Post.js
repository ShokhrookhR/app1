import React, { useState } from 'react';
import s from './Post.module.css';

function Post(props) {
  const [count, setCount] = useState(1);
    

    return (
      <div className={s.post}>
        <div className={s.img}>
          <img src="https://picsum.photos/50/50" alt="Ava" />
        </div>
        <div className={s.body}>
          <div className={s.text}>{props.text}</div>
          <div className={s.likes}>
            <span>{count}</span>

            <button
              onClick={() => {
                setCount((actual) => actual + 1);
              }}>
              Like
            </button>
          </div>
        </div>
      </div>
    );
}

export default Post;
