import React from 'react';
import './Users.module.css';
import s from './Users.module.css';
import userPhoto from '../../assets/Images/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/FormsContorls/Pagenator/Paginator';
import Preloader from './Preloader';

const Users = (props) => {
  return (
    <div className={s.wrapper}>
      <Paginator {...props} />
      {props.isLoading ? <Preloader /> : null}
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
