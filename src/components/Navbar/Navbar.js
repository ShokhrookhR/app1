import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

function Navbar() {
  return (
	 
		 
			 <div className={s.nav}>
				 <div className={s.item}><NavLink to="/profile">Profile</NavLink></div>
				 <div className={s.item}><NavLink to={"/dialogs"}>Dialogs</NavLink></div>
				 <div className={s.item}>Communities</div>
				 <div className={s.item}>Friends</div>
			 </div>
		 
	 
  )
}

export default Navbar