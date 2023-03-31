import React from 'react';
import { useParams } from 'react-router-dom';
const MemberInfoPage = () => {
	const {id} = useParams();

	return ( <h1>Member Info {id}</h1> );
}

export default MemberInfoPage;
