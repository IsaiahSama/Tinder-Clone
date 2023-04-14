import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {console.log(backButton)}
      {backButton ? (
        <IconButton onClick={() => navigate(backButton, { replace: true })}>
          <ArrowBackIos fontSize="large" className="header__backButton" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
          alt="Tinder Logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
