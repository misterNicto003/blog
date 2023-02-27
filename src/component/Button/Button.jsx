import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ to, variant, children }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`} href={to}>
          {children}
        </Link>
      ) : (
        <button className={`btn ${variant || ""}`}>{children}</button>
      )}
    </>
  );
};

export default Button;
