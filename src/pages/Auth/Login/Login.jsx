import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Heading from "../../../component/Heading/Heading";
import Input from "../../../component/Form/Input/Input";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

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

    const res = {
      user: {
        username2: "",
        firstName: "",
      },
      token: "ssssssddadasdasdafafadfS",
    };

    dispatch({ type: "AUTH", payload: res });

    console.log(res);
  };

  return (
    <div className="login">
      <Heading>Войти</Heading>

      <form className="login_form" onSubmit={handleSubmit}>
        <Input
          name="username2"
          type="text"
          placeholder="Username"
          required
          value={text.username2}
          onChange={handleChanch}
        />
        <Input
          name="password2"
          type="Password"
          value={text.password2}
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
