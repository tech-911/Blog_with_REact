import React from "react";

const WidgetButton = ({ text, style }) => {
  console.log(style);
  return (
    <div>
      <button style={style} className="px-6 py-3 bg-[#F9FAFB] rounded-[29px]">
        {text}
      </button>
    </div>
  );
};

export default WidgetButton;
