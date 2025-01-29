import { useParams } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  body: string;
}

function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const stringifiedArticles: string = localStorage.getItem("articles") || "[]";
  const articles: Article[] = JSON.parse(stringifiedArticles);
  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return <p>Article not found!</p>;
  }

  return (
    <div>
      {article.title}
      <br></br>
      <br></br>
      {article.body}
    </div>
  );
}

export { ArticlePage };
