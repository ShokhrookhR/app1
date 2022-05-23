import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://picsum.photos/1200/450" onDragStart={handleDragStart} />,
  <img src="https://picsum.photos/1200/451" onDragStart={handleDragStart} />,
  <img src="https://picsum.photos/1200/452" onDragStart={handleDragStart} />,
];
function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.img}>
        <img src="https://picsum.photos/1000/200" alt="" />
        
      </div>
      <div className={s.body}>
        <div className={s.content}>
          <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
