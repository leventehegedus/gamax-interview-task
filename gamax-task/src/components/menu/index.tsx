import MenuItem from "../menuItem";

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4 rounded">
      <ul className="flex">
        <MenuItem to="/" text="Home" />
        <MenuItem to="/search" text="Search" />
      </ul>
    </nav>
  );
};

export default Menu;
