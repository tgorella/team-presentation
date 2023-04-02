import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Bage from "../components/Bage";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import MemberPreview from '../components/MemberPreview';
import { useMember } from "../hooks/useMember";

const FeaturesPage = () => {
	const { members } = useMember();
	const currentMember = members[0]
  const [innerText, setInnerText] = useState("Some text here");
  const handleClick = () => {
    if (innerText === "Some text here") {
      setInnerText("I'm working");
    } else {
      setInnerText("Some text here");
    }
  };
	const toggleFavourite = () => {
console.log("click")
	}
  return (
    <div className="member-info-wrapper">
      <BreadCrumbs />
      <h1>Компоненты</h1>
      <div className="components-wrapper">
        <h3>Bread Crumbs</h3>
        <BreadCrumbs />
      </div>
      <div className="components-wrapper">
        <h3>Progress Bar</h3>
        <ProgressBar label="Some text" number="62" color="orange" />
        <ProgressBar label="Another text" number="81" color="#F85D93" />
      </div>
      <div className="components-wrapper">
        <h3>Button</h3>
        <Button
          func={handleClick}
          color="orange"
          label='type="round"'
          type="round"
        />{" "}
        <Button
          func={handleClick}
          color="#F85D93"
          label='type="square"'
          type="square"
        />
      </div>
      <div className="components-wrapper">
        <h3>Bage</h3>
        <Bage content='color="orange"' color="orange" />{" "}
        <Bage content='color="#F85D93"' color="#F85D93" />{" "}
        <Bage content='color="#00bcd4' color="#00bcd4" />
      </div>
			<div className="components-wrapper">
        <h3>Меню</h3>
        <NavBar />
      </div>
			<div className="components-wrapper">
        <h3>Карточка участника команды</h3>
        <MemberPreview key={currentMember.id} member={currentMember} toggleFavourite={toggleFavourite} />
				<p>Вариант без добавления в избранное. Просто не передаем пропс toggleFavourite</p>
				<MemberPreview key={currentMember.id+2} member={currentMember} />
      </div>
    </div>
  );
};

export default FeaturesPage;
