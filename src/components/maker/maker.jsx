import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kimsky",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "developer.kimsky@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
    {
      id: "2",
      name: "Kimsky2",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "developer.kimsky@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
    {
      id: "3",
      name: "Kimsky3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "developer.kimsky@gmail.com",
      message: "go for it",
      fileName: "file",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
