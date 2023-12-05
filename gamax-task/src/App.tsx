import "./App.css";
import Badges from "./components/badges";
import Communities from "./components/communities";
import Search from "./components/search";
import Stats from "./components/stats";
import Tags from "./components/tags";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Stats />
        <Badges />
        <Communities />
        <Tags />
        <Search />
      </div>
    </>
  );
}

export default App;
