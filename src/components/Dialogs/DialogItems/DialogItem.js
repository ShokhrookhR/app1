import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogItem.module.css';
import s from './DialogItem.module.css'


const DialogItem = (props) => {
	let path=`/dialogs/${props.id}`
  return (
    <div className={s.dialog}>
      <NavLink to={path} className={(dialData)=>dialData.isActive?s.active:null}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
