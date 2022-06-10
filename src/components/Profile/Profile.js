import React from 'react';

import s from './Profile.module.css';

import 'react-alice-carousel/lib/alice-carousel.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.img}>
        <img src="https://picsum.photos/1000/200" alt="" />
      </div>
      <ProfileInfo profile={props.userProfile} />
      <div className={s.body}>
        <div className={s.content}>
          <MyPostsContainer store={props.store} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
