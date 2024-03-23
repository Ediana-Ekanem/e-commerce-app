import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            src="/images/hero__1.webp"
            alt="hero image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[60%] -translate-y-[50%] sm:space-y-4 text-green-800">
          <p className="text-2xl hidden sm:block">100% original Dry Fruits</p>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Best Healthy Dried Fruits
          </h2>
          <p className=" text-red-600 font-semibold   text-xl pt-4 sm:pt-8">
            Starting At
          </p>
          <div className="font-medium text-green-500 text-2xl sm:text-4xl pb-4 sm:pb-8">
            $18.36
          </div>
          <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2  px-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
            Shop Now <BsArrowRight />
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/hero__2.webp"
            alt="hero image"
            className="h-full w-full rounded-lg object-cover "
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 ">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Best Yummy Chips
            </h2>
            <p className="  font-semibold text-xl pt-4 text-red-600 ">
              Starting At
            </p>
            <div className="font-medium text-green-500 text-2xl sm:text-4xl pb-8">
              $10
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2 px-3 text-[14px]  cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/hero__3.webp"
            alt="hero image"
            className="h-full w-full rounded-lg object-cover "
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 ">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Best Yummy Chips
            </h2>
            <p className="  font-semibold text-xl pt-4 text-red-600 ">
              Starting At
            </p>
            <div className="font-medium text-green-500 text-2xl sm:text-4xl pb-8">
              $25
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2 px-3 text-[14px]  cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
