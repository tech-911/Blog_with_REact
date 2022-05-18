import React from "react";


const WidgetCircle = ({circleImage, size}) => {
  return (
    <div>
      <div style={size} className="rounded-[50%] bg-[#F9FAFB] flex items-center justify-center">
        <img src={circleImage} alt="no available" />
      </div>
    </div>
  );
};

export default WidgetCircle;
