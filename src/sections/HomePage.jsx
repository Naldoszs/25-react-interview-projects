import Button from "../components/Button";
import LinkButton1 from "../components/LinkButton1";
import LinkButton2 from "../components/LinkButton2";
import LinkButton3 from "../components/LinkButton3";
import LinkButton4 from "../components/LinkButton4";
import LinkButton5 from "../components/LinkButton5";

const HomePage = () => {
  return (
    <section className="flex w-full min-h-screen justify-center items-center flex-col space-y-3 border-2 border-red-500 padding-desktop max-lg:padding-tablet max-sm:padding-mobile text-main-black">
      <LinkButton1 />
      {/* accordion */}
      <LinkButton2 />
      {/* hex color */}
      <LinkButton3 /> {/* star rating */}
      <LinkButton4 /> {/* image slider */}
      <LinkButton5 /> {/* infinit scroll/load more btn */}
    </section>
  );
};

export default HomePage;
