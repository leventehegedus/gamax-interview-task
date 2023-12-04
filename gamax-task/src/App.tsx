import "./App.css";
import Badges from "./components/badges";
import Communities from "./components/communities";
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
      </div>
    </>
  );
}

export default App;
