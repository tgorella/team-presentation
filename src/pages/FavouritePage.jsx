import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import MemberPreview from '../components/MemberPreview';
import { useMember } from '../hooks/useMember';

const FavouritePage = () => {
	const favourite = JSON.parse(localStorage.getItem("fav-members"))
	const { members } = useMember();

	if (!favourite || favourite === []) {
		return (
			<div className="member-info-wrapper">
				<BreadCrumbs />
				<h1>Избранное</h1>
				<div>
				<h3>Вы еще никого не добавили в избранное</h3>
				</div>
			</div>
		);
	}
const favMembers = favourite.map((i) => {
	return members.find((el) => el.id === i)
	})
  return (
    <div className="member-info-wrapper">
			<BreadCrumbs />
      <h1>Избранное</h1>
			<div>
			{ favMembers.map((m) => {
				return (<MemberPreview key={m.id} member={m} />)
			})}
    </div>
		</div>
  );
};

export default FavouritePage;
