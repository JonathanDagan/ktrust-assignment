import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default LandingPage;
