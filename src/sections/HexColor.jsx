import Button from "../components/Button";
import { useState } from "react";
import LinkButton from "../components/LinkButton";
const HexColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#ff0000");

  const generateRandomIndexUtility = (lengthOfArray) => {
    return Math.floor(Math.random() * lengthOfArray);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // initiate the hex color with #
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      //get randomIndex
      hexColor += hex[generateRandomIndexUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    //get r,g & b
    const r = generateRandomIndexUtility(256);
    const g = generateRandomIndexUtility(256);
    const b = generateRandomIndexUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  return (
    <section
      className={`flex flex-col w-[100vw] h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center`}
      style={{
        backgroundColor: color,
      }}
    >
      <div
        aria-label="buttons container"
        className="flex space-x-2 h-auto w-full max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 justify-center mx-auto items-center p-5 bg-black rounded-md bg-opacity-5 backdrop-blur-lg"
      >
        <Button
          minWidth="min-w-[0]"
          text="Create HEX Color"
          hoverColor="hover:bg-blue-500"
          backgroundColor={colorType === "hex" ? "bg-black" : "bg-transparent"}
          color={colorType === "hex" ? "text-white" : "text-black"}
          borderColor="border-black"
          borderWeight="border-2"
          onClick={() => {
            setColorType("hex");
          }}
        />

        <Button
          minWidth="min-w-[0]"
          text="Create RGB Color"
          backgroundColor={colorType !== "hex" ? "bg-black" : "bg-transparent"}
          hoverColor="hover:bg-green-500"
          borderColor={colorType !== "hex" ? "border-none" : "border-black"}
          borderWeight={colorType !== "hex" ? "border-none" : "border-2"}
          color={colorType !== "hex" ? "text-white" : "text-black"}
          onClick={() => {
            setColorType("rgb");
          }}
        />

        <Button
          minWidth="min-w-[0]"
          backgroundColor="bg-purple-500"
          text="Generate Random Color"
          hoverColor="hover:bg-red-500"
          onClick={() => {
            colorType === "hex"
              ? handleCreateRandomHexColor()
              : handleCreateRandomRgbColor();
          }}
        />
      </div>
      <div
        aria-label="display result"
        className="flex flex-col w-full h-full items-center space-y-6 justify-between p-8"
      >
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-4xl font-semibold ">
            {colorType === "rgb" ? "RGB VALUE" : "HEX VALUE"}
          </h3>
          <p className="text-2xl font-normal ">{color}</p>
        </div>
        <LinkButton text="Back to Home" path="/" />
      </div>
    </section>
  );
};

export default HexColor;
// border-2 border-red-500
// border-2 border-purple-500
// border-2 border-green-500
// maxWidth = "max-w-[50%]",
//   minWidth = "min-w-[65%]"
