import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css'

function Friends(props) {
  return (
    
		<div className={s.friends}>
			<div className={s.title}>Friends</div>
			<div className={s.body}>

				<div className={s.item}>
          {props.friends.map((e)=>(
          <FriendItem img={e.img} name={e.name}/>
        ))}
          
        </div>
			</div>
		</div>
    
  );
}

export default Friends