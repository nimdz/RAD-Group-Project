import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeSlider() {
  const [slides, setSlides] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(5); 
  const defaultURL = "http://localhost:4000/";

  useEffect(() => {
    axios.get("/accommodation").then(({ data }) => {
      setSlides(data);
    });
  }, []);

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1600) {
      setSlidesToShow(5);
    } else if (window.innerWidth >= 1200) {
      setSlidesToShow(4);
    } else if (window.innerWidth >= 980) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 750) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const CustomPrevArrow = () => {
    return <></>; 
  };

  const CustomNextArrow = () => {
    return <></>; 
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative z-0 px-[30px] md:px-[50px] lg:px-[100px] gap-1 text-left">
      <Slider {...settings}>
        {slides.length > 0 &&
          slides.map((slide) => (
            <Link
              key={slide._id}
              className="flex mt-3 rounded-lg"
              to={`/hotel/${slide._id}`}
            >
              <div className="flex-col mx-1 bg-gray-100 rounded-lg h-[300px]">
                {slide.photos.length > 0 && (
                  <div className="h-[190px]">
                    <img
                      className="h-full w-full object-cover overflow-hidden rounded-t-lg"
                      src={defaultURL + "uploads/" + slide.photos[0]}
                      alt="slide"
                    />
                  </div>
                )}
                <div className="content w-full h-[100px] mt-[3px] mx-[10px]">
                  <div className="h-1/4">
                    <h1 className="truncate-2-lines text-[16px] font-semibold">
                      {slide.title}
                    </h1>
                  </div>
                  <div className="h-2/4">
                    <h2 className="truncate-2-lines text-[12px]">
                      {slide.address}
                    </h2>
                  </div>
                  <div className="h-1/4 text-[14px] font-semibold">
                    <h3>Per night: ${slide.price}.00</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
