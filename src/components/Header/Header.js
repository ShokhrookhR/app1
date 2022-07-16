import React from "react";
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {
  

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.img}>
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className={s.auth}>
          {props.isAuth ? (
            <div className={s.user}>
              <div>{props.login} - </div>
              <button onClick={props.logout} className={s.btn}>
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to={'/login'}>Log In</NavLink>
          )}
          <div>
            {props.users.map((u) => {
              return u.id === props.userId ? <div>{u.id}</div> : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
