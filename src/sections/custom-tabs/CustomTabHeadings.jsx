const CustomTabHeadings = ({ tabsContent, onClick }) => {
  return (
    <div className="flex justify-center gap-14 p-5 border-2 border-gray-300 rounded-md shadow-lg">
      {tabsContent &&
        tabsContent.map((tabHeading, index) => (
          <div
            className="cursor-pointer"
            key={tabHeading.label}
            onClick={() => onClick(index)}
          >
            <span className="text-xl font-semibold font-workSans text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out select-none">
              {tabHeading.label}
            </span>
          </div>
        ))}
    </div>
  );
};

export default CustomTabHeadings;
