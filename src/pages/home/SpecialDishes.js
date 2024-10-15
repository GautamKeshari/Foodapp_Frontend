import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../Components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {          //used for sliding right
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}        //destructing -> along with previous property we are adding new property also. 
      onClick={onClick}
    >
      Next
    </div>
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      Back
    </div>
  );
};

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/menu")
      .then((res) => res.json())
      .then((data) => {
        // 
        const specials = data.filter((item) => item.category === "popular");
        setRecipies(specials);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">
          Enjoy delicious meals like never before
        </h2>
      </div>

      <div className="md:absolute right-3 top-16  mb-5 md:mr-25">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn rounded-full ml-5 bg-blue"
        >
          <FaAngleLeft className="w-8 h-8 p-1 " />     
          {/* Left Button */}
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn rounded-full ml-5 bg-blue"
        >
          <FaAngleRight className="w-8 h-8 p-1 " />
        </button>
      </div>

      <Slider
        ref={slider}
        {...settings}
        className="overflow-hidden mt-10 space-x-2"
      >
        {recipies.map((item, i) => (
          <Cards key={i} item={item} />
          // Card Component imported here
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
