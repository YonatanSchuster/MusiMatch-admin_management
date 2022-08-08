import Dropdown from "./Dropdown";
import logo from "../images/musimatch_logo.png";

const items = [
  {
    id: 1,
    value: "Home",
    href: "/",
  },
  {
    id: 2,
    value: "Users management",
    href: "/users/all",
  },
  // {
  //   id: 3,
  //   value: "Statistics",
  //   href: "/statistics",
  // },
];

function Navbar() {
  return (
    <div className="bg-[#36213E] w-full h-full flex justify-between px-8 py-6 items-center">
      <a href="/">
        <img className="w-20 h-20" src={logo} alt="musimatch logo" />
      </a>
      <a href="/">
        <h1 className="text-4xl font-bold text-[#FFF699] h-[120px] flex justify-center items-center">
          MusiMatch - Admin managment
        </h1>
      </a>
      <div>{<Dropdown items={items} />}</div>
    </div>
  );
}

export default Navbar;
