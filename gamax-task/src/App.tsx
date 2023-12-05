// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Badges from "./components/badges";
import Communities from "./components/communities";
import Search from "./components/search";
import Stats from "./components/stats";
import Tags from "./components/tags";
import Menu from "./components/menu";
import User from "./components/user";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-4">
          <Menu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <User />
      <Stats />
      <Badges />
      <Communities />
      <Tags />
    </>
  );
}

export default App;
