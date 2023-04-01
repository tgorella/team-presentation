import React from "react";
import { useParams } from "react-router-dom";
import { useMember } from "../hooks/useMember";
import TG_IMG from "../assets/tatiana-gorelova.webp";
import ProgressBar from "../components/ProgressBar";
import BreadCrumbs from "../components/BreadCrumbs";
const MemberInfoPage = () => {
  const { id } = useParams();
  const { members } = useMember();
  const currentMember = members.find((member) => member.id === id);
  let imageUrl = "";
console.log(currentMember)
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
			<BreadCrumbs />
		<div className="welcome-block">
			<div className="photo-container">
			<div className="hello-text">ПРИВЕТ</div>
			<div className="name-text">меня зовут {currentMember.name}</div>
			<img src={imageUrl} alt={currentMember.name} />
			</div>
			<div className="skills-container">
				<h2>Статы:</h2>
				<ProgressBar label="Возраст" number={currentMember.age} color="green" />
				{currentMember.skills.map(skill => {
					return <ProgressBar label={skill.label} number={skill.number} color={skill.color} key={skill.label}/>
				})}
			</div>
			</div>
			<div className="about-container">
				<h2 style={{marginBottom: "30px", fontSize: "2rem", textTransform: "uppercase"}}>Обо мне</h2>
				<p>I am 37 years old. I have a passion for coding and enjoy spending my free time learning new programming languages and working on personal projects. In addition to coding, I am also an avid photographer. I love capturing beautiful moments and turning them into lasting memories. Whether it's landscapes, portraits, or anything in between, photography is a creative outlet that I truly enjoy.</p>
			</div>
			</div>
    </>
  );
};

export default MemberInfoPage;
