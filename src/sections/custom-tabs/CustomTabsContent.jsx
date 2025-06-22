const CustomTabsContent = ({ tabsContent, currIndex }) => {
  return (
    <div className="mx-auto mt-10 ">
      <p className="text-xl font-dmSans font-semibold text-gray-400 w-full text-center">
        {tabsContent && tabsContent[currIndex]
          ? tabsContent[currIndex].content
          : ""}
      </p>
    </div>
  );
};

export default CustomTabsContent;
