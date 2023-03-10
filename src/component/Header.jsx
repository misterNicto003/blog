import React from "react";
import Button from "./Button/Button";
import { Link } from "react-router-dom";
import "./header.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const state = useSelector((state) => state);

  return (
    <header className="header">
      <div className="container">
        <div className="header_wrap">
          <Link to="/" className="header_logo"></Link>
          {state.token ? (
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
