import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import LinkButton from "../components/LinkButton";

const ImageSlider = ({ url = "", limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //logic fo the sliderImgs
  const [showCurrentSlider, setShowCurrentSlider] = useState(0); //show D first one as default //used to set both the image to be showed & the the indicator
  //get the image url
  useEffect(() => {
    const fetchImages = async () => {
      try {
        //modify the fetch url to accept limit variable
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        //run this coke if ok
        const fetchedImages = await response.json();
        //set D state of the images
        console.log(fetchedImages);
        setImages(fetchedImages);
      } catch (err) {
        setFetchError(
          `${err.message}...!!. Please connect data & reload` ||
            "Something went wrong while fetching images."
        );
      } finally {
        setIsLoading(false); //set isload to false finally
      }
    };
    //call the function
    fetchImages();
  }, [url, limit, page]);

  //function to handle previous
  const handlePrevious = () => {
    //set current slide to display
    setShowCurrentSlider(
      showCurrentSlider === 0 ? images.length - 1 : showCurrentSlider - 1
    );
  };

  //function to handle previous
  const handleNext = () => {
    setShowCurrentSlider(
      showCurrentSlider === images.length - 1 ? 0 : showCurrentSlider + 1
    );
  };
  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-center overflow-x-auto justify-center">
      <p className="font-dmSans text-4xl font-bold mb-5">Slider Project</p>
      {isLoading && (
        <p className="text-xl font-workSans font-medium min-h-[100vh] flex w-full justify-center items-center">
          Images is loading, please wait...
        </p>
      )}
      {fetchError ? (
        <p className="text-2xl text-red-500 capitalize font-medium min-h-[100vh] flex w-full justify-center items-center">{`${fetchError}`}</p>
      ) : (
        <div
          className="w-[600px] flex h-[450px] justify-center items-center relative max-lg:w-[500px] max-lg:h-[375px]"
          aria-label="the images container"
        >
          {/* the browser icon left */}

          <BsArrowLeftCircleFill
            className="z-10 absolute left-5 text-4xl text-blue-500 cursor-pointer transition-all duration-450 ease-in-out hover:opacity-80"
            onClick={() => {
              handlePrevious();
            }}
          />
          {/* stopped at 1:12:38 at defining arrow @apply class */}

          {/* run through the images array */}
          {images &&
            images.map((img, index) => (
              <img
                key={index}
                //   src={img.download_url}
                src={img.download_url} // donwloads D img url
                alt={`Image ${index + 1}`}
                className={`select-none
                 ${
                   showCurrentSlider === index
                     ? "currentImage"
                     : "currentImage-hide"
                 }`}
              />
            ))}

          {/* the browser icon right */}
          <BsArrowRightCircleFill
            className="z-10 absolute right-5 text-4xl text-blue-500 cursor-pointer transition-all duration-450 ease-in-out hover:opacity-80"
            onClick={() => {
              handleNext();
            }}
          />
          {/* the indicators */}
          <span className="absolute bottom-1 flex space-x-[6px] backdrop-blur-md shadow-md">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-[15px] h-[15px] rounded-full hover:bg-slate-300 ${showCurrentSlider === index ? "bg-blue-500" : "bg-white"} shadow-md backdrop-blur-md`}
                    onClick={() => {
                      setShowCurrentSlider(index);
                    }}
                  ></button>
                ))
              : null}
          </span>
        </div>
      )}

      <LinkButton text="Back to Home" path="/" marginTop="mt-14" />
    </section>
  );
};

export default ImageSlider;

//border-2 border-red-500
//border-2 border-purple-500
//border-2 border-green-500
