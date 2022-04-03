import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.img}>
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
