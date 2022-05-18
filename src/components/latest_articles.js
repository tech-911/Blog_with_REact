import React from "react";
import { Link } from "react-router-dom";
import Widget1 from "../assets/widget_1.png";
import WidgetButton from "./widget_button";
import WidgetCircle from "./widget_circle";
import ClockImage from "../assets/Time Square.svg";
const Gallery = () => {
  return (
    <div className="bg-[#111827]">
      <div className="container mx-auto pb-20 overflow-x-hidden">
        <div className="flex items-end justify-between">
          <p className="text-[36px] text-[white] font-Inter font-semibold">
            Latest Articles
          </p>
          <p className="text-[20px] text-[#0078FF] font-Inter">view all</p>
        </div>
        {/* =====================Latest articles body begins================================== */}

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="col-span-2 custom-widget-1 flex">
            <div className="p-8 flex flex-col items-start justify-between">
              <WidgetButton text="Freelance" style={{ color: "#0F766E" }} />

              <div className="flex flex-col">
                <p className="text-[#111827] text-[40px] font-Inter font-semibold">
                  Freelancer & WFH
                </p>
                <p className="text-[#648E9E] text-[15px]">
                  Learn how to be a freelancer, work and stay at home as you
                  want... (
                  <Link to="#" className="text-[#0078FF]">
                    read more
                  </Link>
                  )
                </p>
              </div>
            </div>
            <img src={Widget1} alt="not available" className="..." />
          </div>
          <div className="p-8 custom-widget-2 flex flex-col items-start justify-between">
            <div>
              <WidgetButton text="Tips & Trick" style={{ color: "#FB923C" }} />
            </div>
            <div className="flex items-end justify-between w-[80%] self-center mt-8">
              <WidgetCircle
                circleImage={ClockImage}
                size={{ width: "90px", height: "90px" }}
              />
              <WidgetCircle
                circleImage={ClockImage}
                size={{ width: "150px", height: "150px" }}
              />
              <WidgetCircle
                circleImage={ClockImage}
                size={{ width: "90px", height: "90px" }}
              />
            </div>

            <div className="flex flex-col mt-8">
              <p className="text-[#111827] text-[40px] font-Inter font-semibold">
                Pomodoro Method
              </p>
              <p className="text-[#C07E63] text-[15px]">
                Learn how to be a programmer, work and managing time with
                pomodoro... (
                <Link to="#" className="text-[#0078FF]">
                  read more
                </Link>
                )
              </p>
            </div>
          </div>
          <div className="custom-widget-3">03</div>
          <div className="col-span-2 custom-widget-4">04</div>
          <div className="col-span-3 custom-widget-5">07</div>
        </div>

        {/* =====================Latest articles body ends================================= */}
      </div>
    </div>
  );
};

export default Gallery;
