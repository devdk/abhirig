import React, { useState } from 'react';

const TagFilter = ({ handleFilter }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const gymTags = ["Strength Training", "Cardio", "Weightlifting", "Yoga", "Crossfit", "HIIT"];

  const applyFilter = (tag) => {
    setSelectedTag(tag); // Update selected tag
    handleFilter(tag); // Apply filter
  };

  return (
    <div className="filter-widget p-4">
      <h3 className="text-xl uppercase font-semibold tracking-tighter mb-2">Tags</h3>
      <hr className="my-2 border-gray-200" />
      <div className="space-y-1">
        {/* Tag List */}
        {gymTags.map((tag, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300 ${
              selectedTag === tag ? 'bg-gray-200 text-darkGreen' : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => applyFilter(tag)}
          >
            {tag}
          </button>
        ))}
        {/* Clear Button */}
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300"
          onClick={() => applyFilter("")}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TagFilter;
