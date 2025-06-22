import LinkButton from "../../components/LinkButton";
import { tabsContent } from "../../constants/tabsContent";
import CustomTabHeadings from "./CustomTabHeadings";
import CustomTabsContent from "./CustomTabsContent";
import { useState } from "react";

const CustomTabs = () => {
  const [isCurrentIndexTab, setIsCurrentIndexTab] = useState(0);

  // function to handle tab click
  const handleTabClick = (index) => {
    setIsCurrentIndexTab(index);
  };

  return (
    <main>
      <CustomTabHeadings
        tabsContent={tabsContent}
        onClick={(index) => handleTabClick(index)}
      />
      <CustomTabsContent
        tabsContent={tabsContent}
        currIndex={isCurrentIndexTab}
      />
      <div className="mx-2 flex justify-center">
        <LinkButton
          text="Back to Home"
          path="/"
          marginTop="mt-52"
          maxWidth="max-w-[50%]"
        />
      </div>
    </main>
  );
};

export default CustomTabs;
