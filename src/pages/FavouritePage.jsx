import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import MemberPreview from "../components/MemberPreview";
import { useMember } from "../hooks/useMember";
import { useFavs } from "../hooks/useFavs";

const FavouritePage = () => {
  const { members } = useMember();
  const { favourite, toggleFavourite } = useFavs();

  if (!favourite || favourite.length === 0) {
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
    return members.find((el) => el.id === i);
  });
  return (
    <div className="member-info-wrapper">
      <BreadCrumbs />
      <h1>Избранное</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favMembers.map((m) => {
          return (
            <MemberPreview
              key={m.id}
              member={m}
              toggleFavourite={toggleFavourite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouritePage;
