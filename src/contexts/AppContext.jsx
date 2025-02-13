import { createContext, useState } from "react";

const AppContext = createContext(); // create context to be used later

//create provider function
export const AppContextProvider = ({ children }) => {
  //data to share
  const [isToggle, setIsToggle] = useState(false);

  return (
    <AppContext.Provider value={{ isToggle, setIsToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
