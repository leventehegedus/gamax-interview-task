import Badges from "../../components/badges";
import Communities from "../../components/communities";
import Stats from "../../components/stats";
import Tags from "../../components/tags";
import User from "../../components/user";

const Home: React.FC = () => {
  return (
    <>
      <User />
      <Stats />
      <Badges />
      <Communities />
      <Tags />
    </>
  );
};

export default Home;
