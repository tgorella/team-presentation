import React, { useContext, useEffect, useState } from "react";
import memberService from "../services/member.service";
import PropTypes from "prop-types";

const MembersContext = React.createContext();

export const useMember = () => {
  return useContext(MembersContext);
};

const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    try {
      const { content } = await memberService.get();
      setMembers(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <MembersContext.Provider value={{ members, error }}>
      {!isLoading ? children : "Загрузка..."}
    </MembersContext.Provider>
  );
};
export default MembersProvider;

MembersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
