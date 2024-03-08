import MenubarItems from "./MenubarItems";
import menuData from "./data/menu.json";
import { useState } from "react";
const Menubar = () => {
  const [showMenuContent, setShowMenuContent] = useState(false);

  return (
    <div className="min-w-1/6">
      {/* Part of Small screen */}
      <div
        className={`md:hidden h-12 py-3 px-4 text-white ${
          showMenuContent && "bg-gray-800 md:bg-inherit"
        }`}
        onClick={() => setShowMenuContent(!showMenuContent)}
      >
        <span>Menu</span>
        <span className="ml-2 border-r-2 border-b-2 border-gray-400 p-1 inline-block rotate-45 bottom-1 relative hover:rotate-[-135deg] hover:transition-all hover:duration-1000 hover:bottom-0 hover:border-white "></span>
      </div>

      {/* MENU ITEMS */}
      <div
        className={`${
          showMenuContent ? "" : "hidden"
        } absolute z-10 w-full min-h-1/2 left-0 top-12 md:static md:flex`}
      >
        {menuData?.map((item) => (
          <MenubarItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menubar;
