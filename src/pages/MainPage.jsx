import React from 'react';
import { NavLink } from 'react-router-dom';
import Bage from '../components/Bage';
const MainPage = () => {
	return ( <div className="member-info-wrapper">
	<h1>Main Page</h1>
	<NavLink to="member/tatiana">Индивидульная страница</NavLink>
	<NavLink to="favourite">Избранное</NavLink>
	<NavLink to="features">Компоненты</NavLink>

	</div> );
}

export default MainPage;
