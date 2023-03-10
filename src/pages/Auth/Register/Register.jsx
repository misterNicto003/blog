import React, { useState } from "react";
import Heading from "../../../component/Heading/Heading";
import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Input from "../../../component/Form/Input/Input";
import "./register.scss";

const Register = () => {
  const [text, setText] = useState({
    username2: "",
    password2: "",
    cf_password: "",
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
    <div className="register">
      <Heading>Регистрация</Heading>

      <form className="register_form" onSubmit={handleSubmit}>
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
        <Input
          name="cf_password"
          type="text"
          placeholder="Confirm password"
          required
          value={text.cf_password}
          onChange={handleChanch}
        />

        <Button type="submit" variant="solid" FullWis>
          Войти
        </Button>

        <Link to="/login" className="register_forgot fs_12">
          <span>Есть аккаунт? </span> Войти
        </Link>
      </form>
    </div>
  );
};

export default Register;
