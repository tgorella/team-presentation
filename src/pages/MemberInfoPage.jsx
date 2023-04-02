import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useMember } from "../hooks/useMember";
import TG_IMG from "../assets/tatiana-gorelova.webp";
import DB_IMG from "../assets/daria-brusnitsina.webp";
import ProgressBar from "../components/ProgressBar";
import BreadCrumbs from "../components/BreadCrumbs";
import Bage from "../components/Bage";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import MemberPreview from "../components/MemberPreview";

const MemberInfoPage = () => {
  const { id } = useParams();
  const { members } = useMember();
  const currentMember = members.find((member) => member.id === id);
  if (!localStorage.getItem("fav-members")) {
    localStorage.setItem("fav-members", JSON.stringify([]));
  }
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav-members"))
  );
  const [isFav, setFav] = useState(
    favourite.some((item) => item === currentMember.id)
  );
  const [innerText, setInnerText] = useState("Some text here");
  if (!currentMember) {
    return (
      <div
        className="member-info-wrapper"
        style={{ justifyContent: "center", height: "100vh" }}>
        <h1>Такого пользователя не существует</h1>
      </div>
    );
  }
  const toggleFavourite = () => {
    if (isFav === false) {
      favourite.push(currentMember.id);
      localStorage.setItem("fav-members", JSON.stringify(favourite));
    }
    if (isFav === true) {
      localStorage.setItem(
        "fav-members",
        JSON.stringify(favourite.filter((i) => i !== currentMember.id))
      );
      setFavourite(favourite.filter((i) => i !== currentMember.id));
    }
    setFav(!isFav);
  };
  const handleClick = () => {
    if (innerText === "Some text here") {
      setInnerText("I'm working");
    } else {
      setInnerText("Some text here");
    }
  };

  const element = (name) => {
    if (name === "Bread Crumbs") {
      return <BreadCrumbs />;
    }
    if (name === "Bage") {
      return (
        <>
          <Bage content="Some text here" color="orange" />{" "}
          <Bage content="Another text" color="#F85D93" />{" "}
          <Bage content="Another text" color="#00bcd4" />
        </>
      );
    }
    if (name === "Progress Bar") {
      return (
        <>
          <ProgressBar label="Some text" number="62" color="orange" />
          <ProgressBar label="Another text" number="81" color="#F85D93" />
        </>
      );
    }
    if (name === "Button") {
      return (
        <>
          <Button
            func={handleClick}
            color="orange"
            label={innerText}
            type="round"
          />{" "}
          <Button
            func={handleClick}
            color="#F85D93"
            label={innerText}
            type="square"
          />
        </>
      );
    }
    if (name === "Navbar") {
      return (
        <>
          <NavBar />
        </>
      );
    }
    if (name === "user card") {
      return (
        <>
          <MemberPreview key={currentMember.id} member={currentMember} />
        </>
      );
    }
  };

  let imageUrl = "";
  switch (currentMember.id) {
    case "tatiana":
      imageUrl = TG_IMG;
      break;
    case "daria":
      imageUrl = DB_IMG;
      break;
    default:
      break;
  }

  return (
    <>
      <div className="member-info-wrapper">
        <BreadCrumbs />
        <div className="welcome-block">
          <div className="photo-container">
            <div className="hello-text">ПРИВЕТ</div>
            <div className="name-text">меня зовут {currentMember.name}</div>
            <img
              className="member-image"
              src={imageUrl}
              alt={currentMember.name}
            />
          </div>
          <div className="skills-container">
            <h2>Статы:</h2>
            <ProgressBar
              label="Возраст"
              number={currentMember.age}
              color="green"
            />
            {currentMember.skills.map((skill) => {
              return (
                <ProgressBar
                  label={skill.label}
                  number={skill.number}
                  color={skill.color}
                  key={skill.label}
                />
              );
            })}
          </div>
        </div>
        <div className="about-container">
          <div>
            <h2>Обо мне</h2>
            {currentMember.about}
          </div>
          <div>
            <h2>Компоненты, выполненные мною</h2>
            {currentMember.components?.map((component) => {
              return (
                <div key={component.name} className="components-wrapper">
                  <h3>{component.name}</h3>
                  {element(component.name)}
                </div>
              );
            })}
          </div>
          <div>
            <h2>Контакты</h2>
            {currentMember.github && (
              <div>
                <NavLink to={"https://github.com/" + currentMember.github}>
                  <img
                    alt={currentMember.name + " github"}
                    src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    style={{ width: "150px" }}
                  />
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fav-button" onClick={toggleFavourite}>
        {isFav ? (
          <i className="bi bi-balloon-heart-fill"></i>
        ) : (
          <i className="bi bi-balloon-heart"></i>
        )}
      </div>
    </>
  );
};

export default MemberInfoPage;
