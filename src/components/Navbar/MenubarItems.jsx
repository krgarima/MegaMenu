/* eslint-disable react/prop-types */
import { useState } from "react";
import TopMenu from "./TopMenu";
import DropDownMenu from "./DropDownMenu";

const MenubarItems = ({ item }) => {
  const [showMenuContent, setShowMenuContent] = useState(false);

  const handleOpenMenu = () => {
    setShowMenuContent(true);
  };

  const handleCloseMenu = () => {
    setShowMenuContent(false);
  };

  return (
    <div
      key={item.id}
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
      className="min-w-12 bg-gray-800 md:bg-inherit"
    >
      <TopMenu item={item} showMenuContent={showMenuContent} />
      <DropDownMenu
        item={item}
        handleCloseMenu={handleCloseMenu}
        showMenuContent={showMenuContent}
      />
    </div>
  );
};

export default MenubarItems;
