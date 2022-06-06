import axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/Images/user.png';
import './Users.module.css';
import s from './Users.module.css';
const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      props.setUsers(response.data.items);
    });
  }
  return (
    <div className={s.body}>
      {props.users.map((u) => (
        <div key={u.id} className={s.item}>
          <div className={s.image}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userAva" />
          </div>
          <div>{u.name}</div>
          <div>{u.status != null ? u.status : 'Manchester United'}</div>
          <div>
            {u.followed ? (
              <button className={s.btn} onClick={() => props.unfollow(u.id)}>
                Unfollow
              </button>
            ) : (
              <button className={s.btn} onClick={() => props.follow(u.id)}>
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
