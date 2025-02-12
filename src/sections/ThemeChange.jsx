import Button from "../components/Button";
import useLocalStorage from "./custom-hooks/useLocalStorage";

const ThemeChange = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light"); //set initial theme as light

  //ftn to handle theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section
      className={`flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-start overflow-x-auto justify-center  ${theme === "light" ? "bg-white" : "bg-black"} ${theme === "light" ? "text-black" : "text-white"}`}
    >
      <div className="w-full flex flex-col space-y-9 pl-8">
        <div
          aria-label="texts wrapper"
          className="flex flex-col space-y-[6px] w-full"
        >
          <h1 className="font-workSans font-medium text-[3.75rem] max-lg:text-[40px] max-sm:text-[2.5rem]">
            ¡Hello World!
          </h1>

          <p className="w-full text-base font-workSans font-normal">
            Click on the button to move between the light mode and dark mode
          </p>
        </div>

        <Button
          width="w-fit"
          maxWidth="max-w-[0]"
          minWidth="min-w-fit"
          text="Change theme"
          backgroundColor={theme === "light" ? "bg-black" : "bg-white"}
          color={theme === "light" ? "text-white" : "text-black"}
          hoverColor={
            theme === "light" ? "hover:bg-green-500" : "hover:bg-purple-500"
          }
          hoverTextColor={"hover:text-white"}
          onClick={() => handleThemeToggle()}
        />
      </div>
    </section>
  );
};

export default ThemeChange;
