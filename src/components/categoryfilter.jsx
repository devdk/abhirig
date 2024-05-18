import React, { useState } from "react";
import { RiArrowRightDoubleFill } from "@remixicon/react";

const CategoryFilter = ({ handleFilter, handleSearch }) => {
  const categories = [
    "accessories",
    "muscle",
    "supplement",
    "fitness",
    "vitamin",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");

  const applyFilter = (category) => {
    setSelectedCategory(category);
    handleFilter(category);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    handleSearch(value); // Call handleSearch with the input value
  };

  return (
    <div className="filter-widget p-4">
      {/* Search Input */}
      <div className="filter">
        <h3 className="md:text-2xl text-lg uppercase font-semibold tracking-tighter mb-4">
          Search filter
        </h3>
        <input
          type="text"
          placeholder="Search by Product Name"
          onChange={handleInputChange}
          className="border-2 border-gray-400 rounded-md md:p-2 p-1 w-full"
        />
      </div>
      <h3 className="md:text-2xl text-lg uppercase font-semibold tracking-tighter mt-4 mb-2">
        Categories
      </h3>
      <hr className="my-2 border-gray-200" />
      <div className="space-y-4">
        {/* Category List */}
        {categories.map((category, index) => (
          <div
            key={index}
            className={` flex flex-row-reverse items-center justify-between uppercase cursor-pointer md:text-lg text-sm hover:text-gold-100 ${
              selectedCategory === category
                ? "text-gold-100 "
                : "text-gray-800"
            }`}
            onClick={() => applyFilter(category)}
          >
            <RiArrowRightDoubleFill
              size={20}
              color="green"
              className="my-icon"
              alt="category"
            />
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
