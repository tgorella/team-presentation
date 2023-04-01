import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMember } from "../hooks/useMember";
import TG_IMG from "../assets/tatiana-gorelova.webp";
import ProgressBar from "../components/ProgressBar";
import BreadCrumbs from "../components/BreadCrumbs";
import Bage from "../components/Bage";
import Button from "../components/Button";
const MemberInfoPage = () => {
  const { id } = useParams();
  const { members } = useMember();
  const [innerText, setInnerText] = useState("Some text here");
  const handleClick = () => {
    if (innerText === "Some text here") {
      setInnerText("I'm working");
    } else {
      setInnerText("Some text here");
    }
  };
  const currentMember = members.find((member) => member.id === id);
  if (!currentMember) {
    return (
      <div
        className="member-info-wrapper"
        style={{ justifyContent: "center", height: "100vh" }}>
        <h1>Такого пользователя не существует</h1>
      </div>
    );
  }
  const element = (name) => {
    if (name === "Bread Crumbs") {
      return <BreadCrumbs />;
    }
    if (name === "Bage") {
      return <Bage content="Some text here" color="orange" />;
    }
    if (name === "Progress Bar") {
      return <ProgressBar label="Some text" number="62" color="orange" />;
    }
    if (name === "Button") {
      return (
        <>
          <Button
            func={handleClick}
            color="orange"
            label={innerText}
            type="round"
          />
        </>
      );
    }
  };

  let imageUrl = "";
  switch (currentMember.id) {
    case "tatiana":
      imageUrl = TG_IMG;
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
            <img src={imageUrl} alt={currentMember.name} />
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
            {currentMember.components.map((component) => {
              return (
                <div key={component.name} className="components-wrapper">
                  <h3>{component.name}</h3>
                  {element(component.name)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberInfoPage;
