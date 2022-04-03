import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.profile}>
      <div className={s.img}>
        <img src="https://picsum.photos/1000/200" alt="" />
      </div>
      <div className={s.body}>
        <div className={s.content}>
          <MyPosts />
        </div>
      </div>
    </div>
  );
}

export default Profile;
