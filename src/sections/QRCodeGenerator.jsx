import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import QRCode from "react-qr-code";
import LinkButton from "../components/LinkButton";

const QRCodeGenerator = () => {
  const [inputVal, setInputVal] = useState("");
  const [qrCode, setQrCode] = useState(() => {
    return localStorage.getItem("qrCode") || "";
  });
  const inputRef = useRef();

  //ftn ti implement localstorage
  const saveToLocalStorage = (key1, value1) => {
    localStorage.setItem(key1, value1);
  };

  //functn to handle qr code gen
  const handleQRCodeGeneration = () => {
    if (inputVal.trim() !== "") {
      setQrCode(inputVal.trim());
      //push the ref to the input
      inputRef.current.focus();
      setInputVal("");
    }
  };
  //ftn to runfor key down
  const handleOnKeyDown = (e) => {
    if (e.code === "Enter") {
      handleQRCodeGeneration();
    }
  };

  useEffect(() => {
    saveToLocalStorage("qrCode", qrCode);
  }, [qrCode]);

  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center overflow-x-auto justify-start">
      <div
        aria-label="main-wrapper"
        className=" w-full flex flex-col space-y-10 items-center"
      >
        <header className="flex flex-col w-full items-center">
          <h1 className="text-3xl font-bold font-dmSans text-center ">
            The QR Code Generation
          </h1>
          <p className="font-workSans  w-full text-center info-text">
            Input a value in the box and generate any QR Code you want...
          </p>
        </header>

        <div
          aria-label="header wrapper"
          className="flex justify-center w-full max-w-[700px] max-sm:max-w-full rounded-md"
        >
          <input
            type="text"
            name="qr-code"
            placeholder="Enter a value..."
            className="flex-1 flex p-2 placeholder-slate-400 bg-slate-50 border-[1.5px] border-slate-300 rounded-md focus:outline-slate-400 text-xl"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            ref={inputRef}
            onKeyDown={(e) => handleOnKeyDown(e)}
          />
          {/* the button */}
          <Button
            backgroundColor={inputVal === "" ? "bg-slate-300" : "bg-blue-900"}
            hoverColor={
              inputVal === "" ? "hover-bg-none" : "hover:bg-green-500"
            }
            cursorType={
              inputVal === "" ? "cursor-not-allowed" : "cursor-pointer"
            }
            width="w-[250px]"
            text="Generate QR Code"
            minWidth="min-w-[0]"
            onClick={() => {
              //add functionality
              handleQRCodeGeneration();
            }}
            //checking for the disability
            disabled={inputVal.trim() === ""}
            // disabled={inputVal && inputVal.trim() !== "" ? false : true}
          />
        </div>
        {/* display of the qr code if generated */}
        {qrCode && (
          <div className="shadow-xl" aria-label="qr code wrapper">
            <QRCode
              value={qrCode}
              size={350}
              includeMargin={true}
              fgColor="darkblue"
              bgColor={"transparent"}
              level="H"
            />
          </div>
        )}

        <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
      </div>
    </section>
  );
};

export default QRCodeGenerator;
