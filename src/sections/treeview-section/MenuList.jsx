import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="flex flex-col space-y-5 p-2  bg-black bg-opacity-10 rounded-sm">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem
              item={listItem}
              key={index}
              className="text-red-500 font-bold"
            />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
