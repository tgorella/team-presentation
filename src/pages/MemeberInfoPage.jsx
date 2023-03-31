import React from "react";
import { useParams } from "react-router-dom";
import { useMember } from "../hooks/useMember";
import TG_IMG from "../assets/tatiana-gorelova.webp";
const MemberInfoPage = () => {
  const { id } = useParams();
  const { members } = useMember();
  const currentMember = members.find((member) => member.id === id);
  let imageUrl = "";

  switch (currentMember.id) {
    case "tatiana":
      imageUrl = TG_IMG;
      break;

    default:
      break;
  }
  if (!currentMember) {
    return "Такого пользователя не существует";
  }
  return (
    <>
		<div className="member-info-wrapper">
		<div className="welcome-block">
			<div className="photo-container">
			<div className="hello-text">ПРИВЕТ</div>
			<div className="name-text">меня зовут {currentMember.name}</div>
			<img src={imageUrl} alt={currentMember.name} />
			</div>
			<div className="skills-container">
				<h2>Мои навыки:</h2>
			</div>
			</div>
			<div className="about-container">
				<p>I am 37 years old. I have a passion for coding and enjoy spending my free time learning new programming languages and working on personal projects. In addition to coding, I am also an avid photographer. I love capturing beautiful moments and turning them into lasting memories. Whether it's landscapes, portraits, or anything in between, photography is a creative outlet that I truly enjoy.</p>
			</div>
			</div>
    </>
  );
};

export default MemberInfoPage;
