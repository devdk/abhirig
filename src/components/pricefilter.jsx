import React, { useState, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceFilter = ({ handleFilter }) => {
  const minPrice = 500;
  const maxPrice = 15000;
  const step = 500;
  const initialRange = [minPrice, maxPrice]; // Initial selected price range

  const [selectedRange, setSelectedRange] = useState(initialRange);
  const sliderRef = useRef(null);

  const applyFilter = () => {
    handleFilter(selectedRange[0], selectedRange[1]);
  };

  const clearFilter = () => {
    setSelectedRange(initialRange); // Reset selected range to initial values
    handleFilter(minPrice, maxPrice); // Apply filter with default range
    if (sliderRef.current) {
      // Reset the slider to its initial position
      sliderRef.current.state.bounds = initialRange;
      sliderRef.current.forceUpdate();
    }
  };

  return (
    <div className="filter-widget p-4 rounded-md">
      <h3 className="text-lg pl-4 md:pl-0 md:text-2xl uppercase font-semibold tracking-tighter mb-6">
        Filter by Price
      </h3>
      <hr className="my-4" />
      <div className="flex md:flex-row-3 gap-2 flex-col space-x-4">
        {/* Price Range Slider */}
        <div className="flex-2">
          <label className="block text-lg font-medium text-gray-900">
            Price : ₹{selectedRange[0]} - ₹{selectedRange[1]}
          </label>
          <Slider
            min={minPrice}
            max={maxPrice}
            step={step}
            range
            value={selectedRange}
            onChange={setSelectedRange}
            ref={sliderRef}
            className="m-2 custom-slider"
          />
        </div>
        {/* Apply Button */}
        <div className="flex gap-4 justify-evenly">
          {/* Apply Button */}
          <button
            className="px-4 py-2 bg-darkGreen text-white  hover:scale-95 transition-all duration-300 md:w-24 hover:bg-green-500"
            onClick={applyFilter}
          >
            Apply
          </button>
          {/* Clear Button */}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 hover:scale-95 md:w-24 hover:bg-gray-200 transition-colors duration-300"
            onClick={clearFilter}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
