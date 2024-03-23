import CategoryCard from "./CategoryCard";

const catData = [
  {
    id: 0,
    title: "Fresh Fruits",
    count: "9 Products",
    img: "/images/category__1.webp",
  },
  {
    id: 1,
    title: "Fresh Vegs",
    count: "8 Products",
    img: "/images/category__2.webp",
  },
  {
    id: 2,
    title: "Canned Goods",
    count: "10 Products",
    img: "/images/category__3.webp",
  },
  {
    id: 3,
    title: "Bread & Bakery ",
    count: "12 Products",
    img: "/images/category__4.webp",
  },
  {
    id: 4,
    title: "Fishes",
    count: "10 Products",
    img: "/images/category__5.webp",
  },
  {
    id: 5,
    title: "Eggs & Dairy",
    count: "7 Products",
    img: "/images/category__6.webp",
  },
  {
    id: 6,
    title: "Soft Drinks",
    count: "5 Products",
    img: "/images/category__7.webp",
  },
  {
    id: 7,
    title: "Fresh Fruits",
    count: "9 Products",
    img: "/images/category__1.webp",
  },
];
const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catData.map((data) => (
          <CategoryCard
            key={data.id}
            img={data.img}
            title={data.title}
            count={data.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
