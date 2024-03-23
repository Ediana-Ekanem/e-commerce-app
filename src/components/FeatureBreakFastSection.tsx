import React from "react";
import ProductCard from "./ProductCard";
const featureData = [
  {
    id: 0,
    img: "/images/product__5.webp",
    name: "Fresh Tomato",
    price: "$400",
  },
  {
    id: 1,
    img: "/images/product__2.webp",
    name: "Crunchy Crips ",
    price: "$300",
  },
  {
    id: 2,
    img: "/images/product__3.webp",
    name: "Jewel Cranberies Crips ",
    price: "$200",
  },
  {
    id: 3,
    img: "/images/product__4.webp",
    name: "Almod Organic",
    price: "$100",
  },
];

const FeatureBreakFastSection = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center my-10">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Diary</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from big-basket stop near you
          </p>
        </div>
        <div className="space-x-3">
          <button className="feature_btn">Eggs & Diary</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          {/* <button className="text-gray-600 hover:text-accent">
            Bread & Backery
          </button> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            src="/images/feature__2.webp"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        {featureData.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureBreakFastSection;
