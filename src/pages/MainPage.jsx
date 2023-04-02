import React from 'react';
import MemberPreview from '../components/MemberPreview';
import { useMember } from '../hooks/useMember';
const MainPage = () => {
	const { members } = useMember();

	return (
	<div className="main-page">
		<h1 className='main-page-title'>Наша команда</h1>
		<div className="about-container">Рады приветствовать вас на странице нашей команды! Изначально наc должно было быть в 2 раза больше. Но тем не менее мы не отступили перед задачей и не опустили руки. </div>
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
