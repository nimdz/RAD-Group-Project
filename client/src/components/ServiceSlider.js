import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeSlider() {
  const [slides, setSlides] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(5); // Initial slidesToShow value

  const defaultURL = "http://localhost:4000/";

  useEffect(() => {
    axios.get("/service").then(({ data }) => {
      setSlides(data);
    });
  }, []);

  // Define a function to update slidesToShow based on screen width
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1600 && slidesToShow !== 5) {
      setSlidesToShow(5);
    } else if (screenWidth >= 1200 && slidesToShow !== 4) {
      setSlidesToShow(4);
    } else if (screenWidth >= 980 && slidesToShow !== 3) {
      setSlidesToShow(3);
    } else if (screenWidth >= 750 && slidesToShow !== 2) {
      setSlidesToShow(2);
    } else if (screenWidth < 750 && slidesToShow !== 1) {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    // Call the updateSlidesToShow function when the component mounts
    updateSlidesToShow();

    // Add a resize event listener to update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const CustomPrevArrow = () => {
    return <></>; // Return an empty fragment to disable the previous button
  };

  const CustomNextArrow = () => {
    return <></>; // Return an empty fragment to disable the next button
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: slidesToShow, // Use the dynamic value
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    loop: true,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative z-0 px-[30px]  gap-1 text-center mt-[20px]">
      <Slider {...settings}>
        {slides.length > 0 &&
          slides.map((slide) => (
            <div key={slide} className="flex mt-3 rounded-lg  h-[250px]">
              <div className="flex-col mx-1 bg-white rounded-lg shadow-md border h-[230px]">
                {slide.photos.length > 0 && (
                  <div className="flex justify-center mt-[20px]">
                    <img
                      className="h-[100px] w-[100px] overflow-hidden rounded-t-lg"
                      src={defaultURL + "uploads/" + slide.photos[0]}
                      alt="slide"
                    />
                  </div>
                )}
                <div className="content w-full h-[100px] mt-[3px] ">
                  <div className="h-1/4">
                    <h1 className="truncate-2-lines text-[16px] font-semibold">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="h-2/4">
                    <h2 className="truncate-2-lines text-[12px] mx-[10px]">
                      {slide.description}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
