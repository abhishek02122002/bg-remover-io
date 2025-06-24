import React, { useState } from "react";
import { assets } from "../assets/assets";
import '../index.css'

export const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (evt) => {
    setSliderPosition(evt.target.value);
  };
  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
        Remove Background with high <br />
        Quality and Accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* Background image  */}
        <div>
          <img
            src={assets.image_w_bg}
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0 )` }}
            alt=""
          />

          {/* FOREGROUND IMAGE  */}
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={assets.image_wo_bg}
            style={{ clipPath: `inset(0  0 0 ${sliderPosition}% )` }}
            alt=""
          />
          {/* SLIDER  */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
            className='slider absolute top-1/2 left-1/2 tansform -translate-x-1/2 -translate-y-1/2 w-full z-10'          />
        </div>
      </div>
    </div>
  );
};
