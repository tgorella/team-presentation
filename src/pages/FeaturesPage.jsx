import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Bage from "../components/Bage";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import MemberPreview from "../components/MemberPreview";
import { useMember } from "../hooks/useMember";
import ComponentBox from "../components/ui/ComponentBox";

const FeaturesPage = () => {
  const { members } = useMember();
  const currentMember = members[0];
  const [innerText, setInnerText] = useState("Some text here");
  const handleClick = () => {
    if (innerText === "Some text here") {
      setInnerText("I'm working");
    } else {
      setInnerText("Some text here");
    }
  };
  const toggleFavourite = () => {
    console.log("click");
  };
  return (
    <div className="member-info-wrapper">
      <BreadCrumbs />
      <h1>Компоненты</h1>
      <ComponentBox title="BreadCrumbs">
        <BreadCrumbs />
      </ComponentBox>
      <ComponentBox title="Progress Bar">
        <ProgressBar label="Some text" number="62" color="orange" />
        <ProgressBar label="Another text" number="81" color="#F85D93" />
      </ComponentBox>
      <ComponentBox title="Button">
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
      </ComponentBox>
      <ComponentBox title="Bage">
        <Bage content='color="orange"' color="orange" />{" "}
        <Bage content='color="#F85D93"' color="#F85D93" />{" "}
        <Bage content='color="#00bcd4' color="#00bcd4" />
      </ComponentBox>
      <ComponentBox title="Меню">
        <NavBar />
      </ComponentBox>
      <ComponentBox title="Карточка участника команды">
        <MemberPreview
          key={currentMember.id}
          member={currentMember}
          toggleFavourite={toggleFavourite}
        />
        <p>
          Вариант без добавления в избранное. Просто не передаем пропс
          toggleFavourite
        </p>
        <MemberPreview key={currentMember.id + 2} member={currentMember} />
      </ComponentBox>
    </div>
  );
};

export default FeaturesPage;
