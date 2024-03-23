import React from "react";
// This is TypeScript right here
interface propType {
  img: string;
  title: string;
  count: string;
}
const CategoryCard: React.FC<propType> = ({ img, title, count }) => {
  return (
    <div className="rounded-lg border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-xl">{title}</h3>
          <p className="text-gray-500">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt={title} />
      </div>
    </div>
  );
};

export default CategoryCard;
