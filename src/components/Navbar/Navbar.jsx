import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-black text-gray-400 flex gap-x-10 items-center md:text-lg font-semibold px-12">
      {/* Logo */}
      <div>Prime</div>
      <Menubar />
    </nav>
  );
};

export default Navbar;
