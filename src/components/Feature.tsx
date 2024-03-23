import React from "react";
import {
  LiaShippingFastSolid,
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Best Price Guarantee ",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Curbside Pickup ",
    icon: <LiaGiftSolid />,
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
  },
];

const Feature = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cold-2 lg:grid-cols-4">
        {featureData.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
