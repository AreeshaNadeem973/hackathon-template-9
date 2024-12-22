import React from "react";
import Hero from "./Hero";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", Image: "/pic1.png" },
  { name: "Jorina Begum", role: "Chef", Image: "/pic2.png" },
  { name: "M. Mohammad", role: "Chef", Image: "/pic3.png" },
  { name: "Munna Kathy", role: "Chef", Image: "/pic4.png" },
  { name: "Tahmina Rumi", role: "Cook", Image: "/pic5.png" },
  { name: "Bisnu Devgon", role: "Chef", Image: "/pic6.png" },
  { name: "Motin Molladst", role: "Chef", Image: "/pic7.png" },
  { name: "William Rumi", role: "Chef", Image: "/pic8.png" },
  { name: "Kets William Roy", role: "Chef", Image: "/pic9.png" },
  { name: "Mahmud Kholil", role: "Chef", Image: "/pic10.png" },
  { name: "Ataur Rahman", role: "Chef", Image: "/pic11.png" },
  { name: "Monalisa Holly", role: "Chef", Image: "/pic12.png" },
];

const ChefGrid = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      {/* Prevent horizontal overflow */}
      <div className="mb-20">
        <Hero />
      </div>
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.Image}
                alt={chef.name}
                width={500} // Specify a width
                height={500} // Specify a height
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
