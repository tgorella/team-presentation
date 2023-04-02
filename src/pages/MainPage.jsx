import React from "react";
import MemberPreview from "../components/MemberPreview";
import { useMember } from "../hooks/useMember";
import { useFavs } from "../hooks/useFavs";
const MainPage = () => {
  const { members } = useMember();
  // if (!localStorage.getItem("fav-members")) {
  //   localStorage.setItem("fav-members", JSON.stringify([]));
  // }
  const { toggleFavourite } = useFavs();

  return (
    <div className="main-page">
      <h1 className="main-page-title">Наша команда</h1>
      <div className="about-container">
        Рады приветствовать вас на странице нашей команды! Изначально наc должно
        было быть в 2 раза больше. Но тем не менее мы не отступили перед задачей
        и не опустили руки.{" "}
      </div>
      <div className="main-page-row">
        {members.map((m) => {
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

export default MainPage;
