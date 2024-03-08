/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TopMenu = ({ item, showMenuContent }) => {
  return (
    <Link to={item?.url}>
      <li className="md:min-w-12 h-12 p-2 px-4 hover:bg-gray-800 hover:text-white">
        <span>{item?.name}</span>
        <span
          className={`${
            item?.categories?.length > 0 ? "" : "hidden"
          } ml-2 border-r-2 border-b-2 border-gray-400 p-1 inline-block rotate-45 bottom-1 ${
            showMenuContent &&
            "rotate-[-135deg] transition-all duration-800 top-0 border-white"
          } relative`}
        ></span>
      </li>
    </Link>
  );
};

export default TopMenu;
