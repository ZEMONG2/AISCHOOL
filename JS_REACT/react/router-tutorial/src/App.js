import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/Articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
