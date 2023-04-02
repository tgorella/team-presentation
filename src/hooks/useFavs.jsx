import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const FavsContext = React.createContext();

export const useFavs = () => {
  return useContext(FavsContext);
};

const FavsProvider = ({ children }) => {
  if (!localStorage.getItem("fav-members")) {
    localStorage.setItem("fav-members", JSON.stringify([]));
  }

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav-members"))
  );

  const toggleFavourite = (id, isFav) => {
    if (isFav === false) {
      localStorage.setItem("fav-members", JSON.stringify([...favourite,id]));
      setFavourite(JSON.parse(localStorage.getItem("fav-members")));
    }
    if (isFav === true) {
      localStorage.setItem(
        "fav-members",
        JSON.stringify(favourite.filter((i) => i !== id))
      );
      setFavourite(favourite.filter((i) => i !== id));
    }
  };


  return (
    <FavsContext.Provider value={{ favourite, toggleFavourite }}>
      {children}
    </FavsContext.Provider>
  );
};
export default FavsProvider;

FavsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
