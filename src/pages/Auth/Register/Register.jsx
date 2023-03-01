import React from "react";
import Heading from "../../../component/Heading/Heading";
import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Input from "../../../component/Form/Input/Input";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <Heading>Регистрация</Heading>

      <form className="register_form">
        <Input
          name="username2"
          type="text"
          placeholder="Username"
          required
          value=""
          onChange=""
        />
        <Input
          name="password2"
          type="Password"
          value=""
          placeholder="Password"
          onChange=""
        />
        <Input
          name="password2"
          type="text"
          placeholder="Confirm password"
          required
          value=""
          onChange=""
        />

        <Button type="submit" variant="solid">
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
