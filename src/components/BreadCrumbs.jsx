import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
const BreadCrumbs = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const links = pathname.split("/").filter((link) => link !== id);

  return (
    <div
      style={{
        position: "relative",
        zIndex: "100",
        fontSize: "1.3rem",
        margin: "20px -20px",
        display: "inline",
      }}>
      <NavLink to="/">Home </NavLink>{" "}
      {links.map((link, index) => {
        let name;
        switch (link) {
          case "favourite":
            name = "Избранное";
            break;
          case "member":
            name = "Информация о команде";
            break;
        }
        if (index === links.length - 1)
          return (
            <p key={link} style={{ display: "inline" }}>
              {" "}
              / {name}
            </p>
          );
        if (link !== "") {
          return (
            <p key={link} style={{ display: "inline" }}>
              / <NavLink>{name}</NavLink>
            </p>
          );
        }
      })}
    </div>
  );
};

export default BreadCrumbs;
