import axios from 'axios';
import userPhoto from '../../assets/Images/user.png';
import React, { Component } from 'react';
import './Users.module.css';
import s from './Users.module.css';

export default class Users extends Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUsers(response.data.items);
      console.log(response.data);
    });
  }
  render() {
    return (
      <div className={s.body}>
        {this.props.users.map((u) => (
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
    );
  }
}
