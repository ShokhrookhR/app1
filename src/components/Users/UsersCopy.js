import axios from 'axios';
import userPhoto from '../../assets/Images/user.png';
import React, { Component } from 'react';
import './Users.module.css';
import s from './Users.module.css';
import { setCurrentPageAC } from '../State/usersReducer';

export default class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.count}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data);
      });
  }
  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(setCurrentPageAC(currentPage));
  };
  render() {
    let pageCurrent = Math.ceil(this.props.totalUsers / this.count);
    let pages = [];
    for (let i = 1; i <= pageCurrent; i++) {
      pages.push(i);
    }

    return (
      <div className={s.wrapper}>
        <div className={s.pagination}>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => {
                  this.setCurrentPage(p);
                }}
                className={this.props.pageCurrent === p && s.active}>
                {p}
              </span>
            );
          })}
        </div>
        <div className={s.body}>
          {this.props.users.map((u, i) => (
            <div key={u.id} className={s.item}>
              <div className={s.image}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userAva" />
              </div>
              <div>{u.name}</div>

              <div>{u.status != null ? u.status : 'Manchester United'}</div>
              <div>
                {u.followed ? (
                  <button className={s.btn} onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button className={s.btn} onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
