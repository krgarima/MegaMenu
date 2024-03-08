/* eslint-disable react/prop-types */
import { useState } from "react";
import SubmenuItems from "./SubmenuItems";

const MenubarItems = ({ item }) => {
  const [showMenuContent, setShowMenuContent] = useState(false);

  const handleHover = () => {
    setShowMenuContent(true);
  };

  const handleMouseLeave = () => {
    setShowMenuContent(false);
  };

  const TopMenu = () => {
    return (
      <a href={item?.url}>
        <li className="md:min-w-12 h-12 p-2 px-4 hover:bg-gray-800 hover:text-white ">
          <span>{item?.name}</span>
          <span
            className={`${
              item?.categories?.length > 0 ? "" : "hidden"
            } ml-2 border-r-2 border-b-2 border-gray-400 p-1 inline-block rotate-45 bottom-1 ${
              showMenuContent &&
              "rotate-[-135deg] transition-all duration-1000 bottom-0 border-white"
            } relative`}
          ></span>
        </li>
      </a>
    );
  };

  const DropDownMenu = () => {
    return (
      <>
        {showMenuContent && item?.categories?.length > 0 && (
          <ul className="md:absolute md:flex md:min-w-12 md:min-h-12 bg-gray-800 shadow-black">
            {item.categories.map((category) => (
              <SubmenuItems key={category.id} category={category} />
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div
      key={item.id}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="min-w-12 bg-gray-800 md:bg-inherit"
    >
      <TopMenu />
      <DropDownMenu />
    </div>
  );
};

export default MenubarItems;
