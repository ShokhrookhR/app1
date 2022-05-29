import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './FriendItem.module.css'

function FriendItem(props) {
  return (
    <div className={s.friend}>
      <div className={s.img}>
        <img src={props.img} />
      </div>
      <div className={s.name}>{props.name}</div>
    </div>
  );
}

export default FriendItem