import React from 'react';
import './Users.module.css';
import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.png';
import { NavLink } from 'react-router-dom';



const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsers / props.count);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.wrapper}>
      <div className={s.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.setCurrentPage(p);
              }}
              className={props.currentPage === p && s.active}>
              {p}
            </span>
          );
        })}
      </div>
      <div className={s.body}>
        {props.users.map((u, i) => (
          <div key={u.id} className={s.item}>
            <div className={s.image}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userAva" />
              </NavLink>
            </div>
            <div>{u.name}</div>

            <div>{u.status != null ? u.status : 'Manchester United'}</div>
            <div>
              {u.followed ? (
                <button
                  className={s.btn}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowSuccess(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.btn}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followSuccess(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
