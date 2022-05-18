import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../assets/g1.png";
import Carousel2 from "../assets/g2.png";
import Carousel3 from "../assets/g3.png";
import Carousel4 from "../assets/g4.png";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="bg-[#111827]">
      <div className="container mx-auto pb-20 overflow-x-hidden">
        <div className="flex items-end justify-between">
          <p className="text-[36px] text-[white] font-Inter font-semibold">
            Galleries
          </p>
          <p className="text-[20px] text-[#0078FF] font-Inter">view all</p>
        </div>
        {/* =====================carousel begins================================== */}
        <div className="mt-10">
          <Slider {...settings}>
            <div className="pl-2">
              <img src={Carousel1} alt="not found" width={"80%"} />
            </div>
            <div className="pl-2">
              <img src={Carousel2} alt="not found" width={"80%"} />
            </div>
            <div className="pl-2">
              <img src={Carousel3} alt="not found" width={"80%"} />
            </div>
            <div className="pl-2">
              <img src={Carousel4} alt="not found" width={"80%"} />
            </div>
            <div className="pl-2">
              <img src={Carousel2} alt="not found" width={"80%"} />
            </div>
            <div className="">
              <img src={Carousel1} alt="not found" width={"80%"} />
            </div>
          </Slider>
        </div>
        {/* =====================carousel ends================================= */}
      </div>
    </div>
  );
};

export default Gallery;
