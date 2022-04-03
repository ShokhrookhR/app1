import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialogs}>
      
      <div className={s.body}>
        <div className={s.content}>
          <MyPosts /> 
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
