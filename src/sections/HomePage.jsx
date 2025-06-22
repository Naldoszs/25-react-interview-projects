import Button from "../components/Button";
import LinkButton1 from "../components/LinkButton1";
import LinkButton10 from "../components/LinkButton10";
import LinkButton2 from "../components/LinkButton2";
import LinkButton3 from "../components/LinkButton3";
import LinkButton4 from "../components/LinkButton4";
import LinkButton5 from "../components/LinkButton5";
import LinkButton6 from "../components/LinkButton6";
import LinkButton7 from "../components/LinkButton7";
import LinkButton8 from "../components/LinkButton8";
import LinkButton9 from "../components/LinkButton9";
import LinkButton11 from "../components/LinkButton11";
import LinkButton12 from "../components/LinkButton12";

const HomePage = () => {
  return (
    <section className="flex w-full min-h-screen justify-center items-center flex-col space-y-3  padding-desktop max-lg:padding-tablet max-sm:padding-mobile text-main-black">
      <LinkButton1 />
      {/* accordion */}
      <LinkButton2 />
      {/* hex color */}
      <LinkButton3 /> {/* star rating */}
      <LinkButton4 /> {/* image slider */}
      <LinkButton5 /> {/* infinite scroll/load more btn */}
      <LinkButton6 />
      {/* tree view component/ menu UI component / recursive neviagtion menu */}
      <LinkButton7 />
      {/* qr code generator */}
      <LinkButton8 />
      {/* theme changer */}
      <LinkButton9 />
      {/* custom scroll indicator */}
      <LinkButton10 />
      {/* custom tabs */}
      <LinkButton11 />
      {/* custom modal */}
      {/* the project component */}
      <LinkButton12 />
      {/* github profile generator*/}
    </section>
  );
};

export default HomePage;
