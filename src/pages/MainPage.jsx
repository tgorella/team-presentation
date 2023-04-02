import React from 'react';
import MemberPreview from '../components/MemberPreview';
import { useMember } from '../hooks/useMember';
const MainPage = () => {
	const { members } = useMember();
	console.log(members)

	return (
	<div className="main-page">
		<h1 className='main-page-title'>Наша команда</h1>
		<div className="main-page-row">
		{members.map((m) => {
              return (
				<MemberPreview key={m.id} member={m} />
              );
        })}

		</div>
	</div> );
}

export default MainPage;
