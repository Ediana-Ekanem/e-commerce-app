import { LuMailOpen } from "react-icons/lu";
const NewsLetter = () => {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Sign up To Our Newsletters
            </h3>
            <p>..and receive $20 coupon for first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            type="text"
            name=""
            id=""
            className="py-4 px-6 w-full rounded-full"
          />
          <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] rounded-full hover:bg-accent py-2 px-6">
            Subscribe!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
