import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "./CartCountBadge";
import { AiOutlineUser } from "react-icons/ai";
const MobNavbar = ({ setShowCart }: any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="p-8 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <IoIosMenu size={30} />
            <BsSearch size={30} />
          </div>
          <h1 className="text-4xl ">Logo</h1>
          <div className="flex gap-4 text-[30px]">
            <div className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px]">
              <AiOutlineUser />
            </div>
            <div
              className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-[22px] relative cursor-pointer"
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

export default MobNavbar;
