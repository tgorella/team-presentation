import React, {useState} from "react";
import BreadCrumbs from "../components/BreadCrumbs";
const FavouritePage = () => {
	const favourite = useState(JSON.parse(localStorage.getItem("fav-members")))
  return (
    <div className="member-info-wrapper">
			<BreadCrumbs />
      <h1>Favourite Page</h1>
			{ !favourite
			? "Вы еще никого не отметили"
			: (favourite.map((item) => {
				return (<p key={item}>{item}</p>)
				}))}
    </div>
  );
};

export default FavouritePage;
