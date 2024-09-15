import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="mt-6">
    <Slider {...settings}>
      <div>
        <img src="flip1.webp" alt="image" />
      </div>
      <div>
      <img src="flip2.webp" alt="image" />
      </div>
      <div>
        <img src="flip3.webp" alt="image" />
      </div>
      <div>
        <img src="flip4.webp" alt="image" />
      </div>
      <div>
        <img src="flip5.webp" alt="image" />
      </div>
      <div>
        <img src="flip6.webp" alt="image" />
      </div>
    </Slider>
    </div>
  );
}