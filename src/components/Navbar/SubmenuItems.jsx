/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Submenu = ({ category, handleCloseMenu }) => {
  return (
    <li key={category?.id} onClick={handleCloseMenu}>
      {category?.name?.length > 0 && (
        <div className="h-12 py-2 px-4 text-white">{category?.name}</div>
      )}
      <ul>
        {category?.subcategories?.map((subcategory) => (
          <Link key={subcategory?.id} to={subcategory.url}>
            <li className="min-h-12 py-2 px-4 hover:bg-white hover:text-gray-800 rounded-md">
              {subcategory?.name}
            </li>
          </Link>
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
