import React from 'react'
import s from './Navbar.module.css'

function Navbar() {
  return (
	 
		 
			 <div className={s.nav}>
				 <div className={s.item}><a href="/profile">Profile</a></div>
				 <div className={s.item}><a href="/dialogs">Dialogs</a></div>
				 <div className={s.item}>Communities</div>
				 <div className={s.item}>Friends</div>
			 </div>
		 
	 
  )
}

export default Navbar