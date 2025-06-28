import React from "react";

const FilterCard = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600 py-10">No tasks found.</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow border border-orange-200"
        >
          <h2 className="text-xl font-semibold mb-2">{item.category} Task</h2>
          <p className="text-gray-700">{item.task}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
