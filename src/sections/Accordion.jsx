import { FaPlus, FaMinus } from "react-icons/fa";
import { accordionData } from "../constants/accordionData";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { useState } from "react";
const Accordion = () => {
  const [selected, setSelected] = useState(1); //set the first id as selected
  const [enablemultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleItems, setMultipleItems] = useState([]);
  const handleSingleSelection = (id) => {
    // setSelected((prev) => (prev === id ? null : id)); // Toggle selection
    setSelected(selected === id ? null : id);
    console.log("handlesingle selection is working");
  };
  const handleMultipleSelection = (id) => {
    //mutate the multiple array
    const copyMultipleItems = [...multipleItems];
    //get the index of the current id
    const findIndexOfCurrentId = copyMultipleItems.indexOf(id);
    // console.log(findIndexOfCurrentId); // returns -1
    if (findIndexOfCurrentId === -1) {
      copyMultipleItems.push(id);
    } else {
      copyMultipleItems.splice(findIndexOfCurrentId, 1);
    }
    //resetting the nutated array back
    setMultipleItems(copyMultipleItems);
    console.log(copyMultipleItems);
  };
  return (
    <section className="flex flex-col w-full h-auto padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center">
      {/* the button container */}

      <Button
        text={
          enablemultipleSelection
            ? "Disable Multi-Selection"
            : "Enable Multi-Selection"
        }
        hoverColor={
          enablemultipleSelection ? "hover:bg-blue-500" : "hover:bg-purple-500"
        }
        marginBottom="mb-5"
        onClick={() => {
          setEnableMultipleSelection(!enablemultipleSelection);
        }}
      />

      {accordionData && accordionData.length > 0 ? (
        accordionData.map((accordionData) => (
          <article
            className="xl:max-w-[800px]  flex flex-col space-y-3 justify-center  w-full h-auto items-center m-auto mb-8 p-3 rounded-md border-2 border-purple-200"
            key={accordionData.id}
          >
            <div
              aria-label="accordion header container"
              className="flex justify-between w-full h-auto items-center  p-2 border-2 border-slate-100 rounded-md cursor-pointer select-none"
              onClick={
                enablemultipleSelection
                  ? () => {
                      handleMultipleSelection(accordionData.id);
                    }
                  : () => handleSingleSelection(accordionData.id)
              }
            >
              <h3 className="w-full text-xl font-medium">
                {accordionData.title}
              </h3>
              <button className="flex p-2 bg-purple-200 rounded-md text-purple-600 hover:bg-purple-800 hover:text-white transition-all duration-500 ease-in-out font-dmSans">
                {enablemultipleSelection ? (
                  multipleItems.includes(accordionData.id) ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )
                ) : selected === accordionData.id ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>
            </div>
            {enablemultipleSelection
              ? multipleItems.includes(accordionData.id) && (
                  <div
                    aria-label="body container"
                    className={`flex p-4 ${accordionData.content && "border-2"} ${accordionData.content && "border-slate-200"} rounded-md text-base font-workSans info-text2`}
                  >
                    <p>{accordionData.content}</p>
                  </div>
                )
              : selected === accordionData.id && (
                  <div
                    aria-label="body container"
                    className={`flex p-4 ${accordionData.content && "border-2"} ${accordionData.content && "border-slate-200"} rounded-md text-base font-workSans info-text2`}
                  >
                    <p>{accordionData.content}</p>
                  </div>
                )}
          </article>
        ))
      ) : (
        <p>no data found</p>
      )}

      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
    </section>
  );
};

export default Accordion;
//  border-2 border-purple-500
//  border-2 border-blue-500
//  border-2 border-red-500
//  border-2 border-green-500
