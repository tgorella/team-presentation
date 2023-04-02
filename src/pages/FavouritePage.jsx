import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import MemberPreview from '../components/MemberPreview';
import { useMember } from '../hooks/useMember';

const FavouritePage = () => {
	const favourite = JSON.parse(localStorage.getItem("fav-members"))
	const { members } = useMember();
const favMembers = favourite.map((i) => {
	return members.find((el) => el.id === i)
	})
  return (
    <div className="member-info-wrapper">
			<BreadCrumbs />
      <h1>Избранное</h1>
			<div>
			{ !favourite
			? "Вы еще никого не отметили"
			: (favMembers.map((m) => {
				return (<MemberPreview key={m.id} member={m} />)
			}))}
    </div>
		</div>
  );
};

export default FavouritePage;
