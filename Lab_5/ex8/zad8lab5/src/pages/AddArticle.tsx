import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  body: string;
}

function AddArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent, navigate) => {
    e.preventDefault();
    if (title == "" || body == "") {
      alert("Wszystkie pola są wymagane");
      return;
    }

    const stringifiedArticles: string =
      localStorage.getItem("articles") || "[]";
    let articles: Article[] = JSON.parse(stringifiedArticles);
    const maxId =
      articles.length > 0
        ? Math.max(...articles.map((article) => article.id))
        : 0;
    const article: Article = { id: maxId + 1, title: title, body: body };
    articles = [...articles, article];
    localStorage.setItem("articles", JSON.stringify(articles));
    setTitle("");
    setBody("");
    navigate("/blog");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Tytuł"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Treść"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e, navigate);
        }}
      >
        Dodaj
      </button>
    </form>
  );
}

export { AddArticle };
