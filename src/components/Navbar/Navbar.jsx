import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-black text-gray-400 flex justify-around items-center md:text-lg font-semibold ">
      <div>Logo</div>
      <Menubar />
      <div>Profile</div>
    </nav>
  );
};

export default Navbar;
