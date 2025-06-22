import LinkButton from "../../components/LinkButton";
import Button from "../../components/Button";
import CustomModalCard from "./CustomModalCard";
import { useState } from "react";
const CustomModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // function to handle modal open
  const handleModalOpen = () => {
    setIsOpenModal((prevState) => !prevState);
  };
  const handleModalClose = () => {
    setIsOpenModal((prevState) => !prevState);
  };
  return (
    <section className="flex flex-col w-[100vw] h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center relative overflow-x-hidden justify-center">
      {/* the custom modal card wrapper cont */}
      {isOpenModal ? (
        <CustomModalCard onClick={() => handleModalClose()} />
      ) : null}

      {/* the prompt btn */}
      <Button
        text="Open modal"
        onClick={isOpenModal === false ? () => handleModalOpen() : null}
      />
      {/* the return button */}
      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
    </section>
  );
};

export default CustomModal;
