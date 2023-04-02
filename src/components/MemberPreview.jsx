import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TG_IMG from "../assets/tatiana-gorelova.webp";
import DB_IMG from "../assets/daria-brusnitsina.webp";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MemberPreview = ({ member }) => {
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav-members"))
  );
  const [isFav, setFav] = useState(
    favourite.some((item) => item === member.id)
  );
  let imageUrl = "";
  switch (member.id) {
    case "tatiana":
      imageUrl = TG_IMG;
      break;
    case "daria":
      imageUrl = DB_IMG;
      break;

    default:
      break;
  }
  const navigate = useNavigate();
  function redirect(path) {
    navigate(path);
  }
  const toggleFavourite = () => {
    if (isFav === false) {
      favourite.push(member.id);
      localStorage.setItem("fav-members", JSON.stringify(favourite));
    }
    if (isFav === true) {
      localStorage.setItem(
        "fav-members",
        JSON.stringify(favourite.filter((i) => i !== member.id))
      );
      setFavourite(favourite.filter((i) => i !== member.id));
    }
    setFav(!isFav);
  };
  return (
    <div className="preview-card">
      <button
        className="preview-card-btn"
        style={{ fontSize: "50px", color: "red", cursor: "pointer" }}
        title="Удалить из избранного"
        onClick={toggleFavourite}>
        {isFav ? (
          <i className="bi bi-balloon-heart-fill"></i>
        ) : (
          <i className="bi bi-balloon-heart"></i>
        )}
      </button>
      <img src={imageUrl} alt={member.name} />
      <div style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold",}}>
        {member.name}
        <span> </span>
        <NavLink to={"https://github.com/" + member.github}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </NavLink>
      </div>

      <Button
        func={() => redirect(`/member/${member.id}`)}
        label="Подробнее"
        color="orange"
        type="round"
      />
    </div>
  );
};

export default MemberPreview;
MemberPreview.propTypes = {
  member: PropTypes.object.isRequired,
};
