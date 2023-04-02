import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
	return (
		<nav>
			<div className='navigation'>
			<NavLink to="">Главная</NavLink>
			<div className='navigation__menu'>
				<NavLink to="/favourite">Избранное</NavLink>
				<NavLink to="/features">Компоненты</NavLink>
			</div>
			</div>
		</nav>
	);
}

export default NavBar;
