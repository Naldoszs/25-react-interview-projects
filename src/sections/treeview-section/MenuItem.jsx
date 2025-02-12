import { useState } from "react";
import MenuList from "./MenuList";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [showChildren, setShowChildren] = useState({}); // make the obj of the label empty at start

  //ftn to show children
  const handleShowChildren = (label) => {
    setShowChildren({ ...showChildren, [label]: !showChildren[label] });
  };

  console.log(showChildren);

  return (
    <li>
      <div
        style={{
          fontWeight: 500,
        }}
      >
        {item.label}
        {item && item.children && item.children.length > 0 ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              handleShowChildren(item.label);
            }}
          >
            {/* chk for funtionality */}
            {showChildren[item.label] ? (
              <FaAngleDown />
            ) : (
              <FaAngleRight
                className="cursor-pointer"
                onClick={() => {
                  handleShowChildren(item.label);
                }}
              />
            )}
          </span>
        ) : null}
      </div>
      {/* rendering another ul for the nested children array */}
      <div className="pl-8">
        {item &&
        item.children &&
        item.children.length > 0 &&
        showChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
