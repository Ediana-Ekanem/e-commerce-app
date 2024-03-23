import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";

const Navbar = ({ setShowCart }: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-3xl font-medium">Logo</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              name=""
              id=""
              placeholder="Search Product...."
            />
            <BsSearch
              size={20}
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-600"
            />
          </div>

          <div className="flex gap-4">
            <div className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px]">
              <AiOutlineUser />
            </div>
            <div
              className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px] relative cursor-pointer "
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px] absolute" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
