import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Licznik } from "./components/zad8_1";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { ArticlePage } from "./pages/Article";
import { AddArticle } from "./pages/AddArticle";
import { NoPage } from "./pages/NoPage";
import { Choinka, Las } from "./components/choinka";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route
            path="/article/:id"
            element={<ArticlePage></ArticlePage>}
          ></Route>
          <Route path="/*" element={<NoPage></NoPage>}></Route>
          <Route path="/addarticle" element={<AddArticle></AddArticle>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
