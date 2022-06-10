import React from 'react';
import Preloader from '../Users/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={props.profile.photos.large} alt="User's ava" />
      <div>
        {props.profile.lookingForAJob ? <span>Ишю работу</span> : <span>Уже нашёл работу</span>}
      </div>
      <div>Моё полное имя: {props.profile.fullName}</div>
      <div>Мой статус: {props.profile.aboutMe}</div>
      <div>Facebook: {props.profile.contacts.facebook}</div>
      <div>VK: {props.profile.contacts.vk}</div>
      <div>Twitter: {props.profile.contacts.twitter}</div>
      <div>Instagram: {props.profile.contacts.instagram}</div>
    </div>
  );
};

export default ProfileInfo;
