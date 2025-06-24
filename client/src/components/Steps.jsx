
import { assets } from "../assets/assets";

export const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Upload easily by clicking on the upload button..
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove BACKGROUND</p>
            <p className="text-sm text-neutral-500 mt-1">
              Easily remove <span className='bg-gradient-to-r  from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>BACKGROUND </span> of image 
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 cursor-pointer">
          <img src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-neutral-500 mt-1">
            Downlaod the image just by one click...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 