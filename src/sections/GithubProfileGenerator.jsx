import LinkButton from "../components/LinkButton";
import Button from "../components/Button";
import { useState, useEffect } from "react";

const GithubProfileGenerator = () => {
  const [userName, setUserName] = useState("Mr Niyi");

  const URL = "https://api.github.com/users/";

  // handlesubmit function
  const handleSubmit = () => {
    fetchUserData(); //call the ftn to fetch data.
  };

  //function to fetchUserData
  const fetchUserData = async () => {
    try {
      const res = await fetch(`${URL}${userName}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //the useEffect ftn
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    // the section
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center overflow-x-auto justify-start">
      <div
        className="w-full flex justify-center"
        aria-label="githbub container"
      >
        <div
          className="flex space-x-[1px] bg-white p-3 border-[1.5px] border-slate-50 w-[60%]"
          aria-label="the header & input container"
        >
          {/* the input cont */}
          <input
            type="text"
            className="bg-slate-100 shadow-lg border-[1.5px] border-slate-300 rounded-sm outline-slate-400 flex p-2 placeholder-slate-400 w-full"
            name="search-by-username"
            placeholder="Search github username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* the button */}
          <Button
            text="Search"
            maxWidth="max-w-0"
            minWidth="min-w-fit"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
      {/* the back button */}
      <LinkButton text="Back to Home" path="/" marginTop="mt-5" />
    </section>
  );
};

export default GithubProfileGenerator;
// the time is 3:20:00 range...
