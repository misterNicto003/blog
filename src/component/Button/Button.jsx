import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ type, to, variant, children, onClick }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`} href={to}>
          {children}
        </Link>
      ) : (
        <button
          type={type && type}
          className={`btn ${variant || ""}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
