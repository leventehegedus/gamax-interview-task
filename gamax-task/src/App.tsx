import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import Menu from "./components/menu";
import Home from "./pages/home";

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

export default App;
