import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Heading from "../../../component/Heading/Heading";
import "./login.scss";

const Login = () => {
  const [text, setText] = useState({
    username2: "",
    password2: "",
  });

  const handleChanch = (e) => {
    const { name, value } = e.target;

    setText({ ...text, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(text);
  };

  return (
    <div className="login">
      <Heading>Войти</Heading>

      <form className="login_form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChanch}
        />
        <input
          name="password"
          type="Password"
          placeholder="Password"
          onChange={handleChanch}
        />
        <Link to="/forgot" className="login_forgot fs_12">
          Забыли пароль?
        </Link>

        <Button type="submit" variant="solid">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
