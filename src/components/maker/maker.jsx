import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      // prevState 사용!
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      // prevState 사용!
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
