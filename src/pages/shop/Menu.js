import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { FaFilter } from "react-icons/fa";
// 9th
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");     //from A-Z 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // loading data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/menu");
        const data = await response.json();
        // console.log(data);  
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // filtering data based on the category
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // show data function
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // sorting item logic 
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low to High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High to Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Slice method for defining index of items
  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

      {/* menu shop section */}
      <div className="section-container mt-16 glass bg-gradient-to-r from-white via-white to-indigo-500">
        <div className="text-center text-blue uppercase tracking-wide font-bold text-5xl mb-4 sm-text-2xl pt-9">Order Your Food</div>
        {/* filtering section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-centerspace-y-3 mb-5">
          {/* buttons for all categories */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-neutral-900 ">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""} 
            >
              All
            </button>
            <button
              onClick={() => filterItem("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItem("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItem("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItem("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItem("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Cold Drinks
            </button>
          </div>

          {/* sorting ... */}
          {/* <div className="flex p-2 justify-end mb-4 rounded-sm">
            <FaFilter className="h-4 w-4 text-blue" />
          </div> */}
          {/* Sorting order Button */}
          <select
            name="sort"
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
          >
            <option value="default">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Low-to-high">low to high</option>
            <option value="high-to-low">high to low</option>
          </select>
        </div>

        {/* products card */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* pagination  */}
      <div className="">
      <div className="flex justify-center my-8">
        {/* Since we don't know the total no. of items, so we first calculate length of total pages  */}
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),   // total pages store in length
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-blue" : "bg-neutral-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Menu;
