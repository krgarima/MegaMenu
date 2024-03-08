import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-black text-gray-400 flex gap-x-6 md:gap-x-12 items-center md:text-lg font-semibold px-6 md:px-12">
      {/* Logo */}
      <div>Prime</div>
      <Menubar />
    </nav>
  );
};

export default Navbar;
