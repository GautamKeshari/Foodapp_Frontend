import React from "react";

const categoriesItems = [
  {
    id: 1,
    title: "Break fast",
    des: "{23 dishes}",
    image: "images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Lunch",
    des: "{33 dishes}",
    image: "images/home/category/img2.jpg",
  },
  {
    id: 3,
    title: "Snack",
    des: "{223 dishes}",
    image: "images/home/category/img3.jpg",
  },
  {
    id: 4,
    title: "Dinner",
    des: "{93 dishes}",
    image: "images/home/category/img4.png",
  },
  {
    id: 5,
    title: "Check all",
    des: "{759 dishes}",
    image: "images/home/category/img1.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-8">
      <div className="text-center">
        <p className="subtitle">Customer favourites</p>
        <h2 className="title"> Popular Categories</h2>   {/* title and section class written in App.css */}
      </div>

      {/* categories cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 space-around  items-center mt-12">
        {categoriesItems.map((items, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-neutral-800 py-6 px-5 w-90 mx-auto text-center cursor-pointer hover:-translate-y-6 duration-300 transitopn-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={items.image}
                alt=""
                className="bg-blue p-5 rounded-full w-28 h-28 "
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{items.title}</h5>
              <p>{items.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
