import Button from "../components/Button";
import LinkButton1 from "../components/LinkButton1";
import LinkButton2 from "../components/LinkButton2";
import LinkButton3 from "../components/LinkButton3";

const HomePage = () => {
  return (
    <section className="flex w-full min-h-screen justify-center items-center flex-col space-y-3 border-2 border-red-500 padding-desktop max-lg:padding-tablet max-sm:padding-mobile text-main-black">
      <LinkButton1 />
      <LinkButton2 />
      <LinkButton3 />
    </section>
  );
};

export default HomePage;
