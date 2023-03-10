import React from "react";
import Heading from "./../../component/Heading/Heading";
import Button from "./../../component/Button/Button";
import Input from "./../../component/Form/Input/Input";
import "./addPost.scss";
import { useState } from "react";

const AddPost = () => {
  const [text, setText] = useState({
    username3: "",
    password3: "",
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
    <div className="addPost">
      <Heading>Добавить Пост</Heading>

      <form onSubmit={handleSubmit}>
        <div className="addPost_file">
          <label htmlFor="file">
            <input type="file" multiple id="file" hidden />
            <div>
              <div></div>
              <span>Выберите файл(ы)</span>
            </div>
          </label>
        </div>

        <Input
          name="username3"
          placeholder="Введите название поста"
          required
          value={text.username3}
          onChange={handleChanch}
        />
        <Input
          name="password3"
          value={text.password3}
          placeholder="Выберите категорию"
          required
          onChange={handleChanch}
        />
        <Input
          name="cf_password"
          value={text.cf_password}
          placeholder="Введите описание поста"
          textarea
          required
          onChange={handleChanch}
        />

        <Button variant="solid">Добавить пост</Button>
      </form>
    </div>
  );
};

export default AddPost;
