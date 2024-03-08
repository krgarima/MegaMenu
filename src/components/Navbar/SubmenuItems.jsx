/* eslint-disable react/prop-types */
const Submenu = ({ category }) => {
  return (
    <li key={category?.id}>
      {category?.name?.length > 0 && (
        <div className="h-12 py-2 px-4 text-white">{category?.name}</div>
      )}
      <ul>
        {category?.subcategories?.map((subcategory) => (
          <a key={subcategory?.id} href={subcategory.url}>
            <li className="h-12 py-2 px-4 hover:bg-white hover:text-gray-800 rounded-md">
              {subcategory?.name}
            </li>
          </a>
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
