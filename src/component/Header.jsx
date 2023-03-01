import React from "react";
import Button from "./Button/Button";
import { Link } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const isAuth = false;
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>
          {isAuth ? (
            <div className="header_auth">
              <Button to="/addPost" variant="solid">
                Добавить пост
              </Button>
            </div>
          ) : (
            <div className="header_btns">
              <Button to="/Login" variant="solid">
                login
              </Button>
              <Button to="/Register" variant="outline">
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
