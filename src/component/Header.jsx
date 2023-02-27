import React from "react";
import Button from "./Button/Button";
import "./header.css";

export const Header = () => {
  const isAuth = true;
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <div className="header_logo"></div>
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
