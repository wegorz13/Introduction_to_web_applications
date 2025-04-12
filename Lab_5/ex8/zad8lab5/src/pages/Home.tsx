import { Link } from "react-router-dom";
import { Las } from "../components/choinka";
function Home() {
  return (
    <div>
      Witaj! Zajrzyj i przeczytaj nasze blogi.
      <br></br>
      <Link to="/blog">Kliknij tutaj</Link>
      <Las></Las>
    </div>
  );
}

export { Home };
