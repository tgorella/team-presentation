import React from 'react';
import { NavLink } from 'react-router-dom';
import Bage from '../components/Bage';
const MainPage = () => {
	return ( <div>
	<h1>Main Page</h1>
	<NavLink to="member/tatiana"><Bage content="Индивидульная страница" color="orange" /></NavLink>
	</div> );
}

export default MainPage;
