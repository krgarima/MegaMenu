/* eslint-disable react/prop-types */
import SubmenuItems from "./SubmenuItems";

const DropDownMenu = ({ item, handleCloseMenu, showMenuContent }) => {
  return (
    <>
      {showMenuContent && item?.categories?.length > 0 && (
        <ul className="md:absolute md:flex md:min-w-12 md:min-h-12 bg-gray-800 shadow-black">
          {item.categories.map((category) => (
            <SubmenuItems
              key={category.id}
              category={category}
              handleCloseMenu={handleCloseMenu}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDownMenu;
