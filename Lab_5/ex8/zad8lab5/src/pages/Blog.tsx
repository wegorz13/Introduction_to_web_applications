import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  body: string;
}

function Blog() {
  const stringifiedArticles: string = localStorage.getItem("articles") || "[]";
  const articles: Article[] = JSON.parse(stringifiedArticles);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <p>{article.title}</p>
            <Link to={`/article/${article.id}`}>
              Link do artykułu {article.id}
            </Link>
          </div>
        );
      })}
      <br></br>
      <br></br>
      <hr></hr>
      <Link to={"/addarticle"}>Dodaj swój własny artykuł!</Link>
    </div>
  );
}

export { Blog };
