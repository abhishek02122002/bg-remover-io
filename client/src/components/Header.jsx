import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
       <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>

      {/* LEFT SIDE  */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br /> 
          <span
          className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
                BACKGROUND</span> from <br /> images for free
        </h1>
        <p className='my-6 text-[15px] text-grey-500'>Upload.Remove.Download</p>
        <div>
          {/* UPLOAD WALA START HERE  */}
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
            <img      width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload your image</p>
          </label>
          {/* UPLOAD WALA ENDS HERE  */}
        </div> 
      </div>

      {/* RIGHT-SIDE  */}
      <div className="w-full max-w-md">
          <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};
