import Image from "next/image";
import Hero from "./Hero";

export default function Menu() {
  return (
    <div className="bg-white text-gray-800">
      <Hero />
      {/* Starter Menu Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full relative left-10" // Adjusted class for moving to the right
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image on the Left */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/Alder Grid.png"
              alt="Starter Menu"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Starter Menu Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Starter Menu
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Alder Grilled Chinook Salmon",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Berries and Creme Tart",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Tormentoso Bush Pizza Pintoage",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Main Course Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-start mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Course Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Main Course</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Optic Big Breakfast Combo Menu",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Cashew Chicken with Stir-Fry",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Vegetables & Green Salad",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Spicy Vegan Potato Curry",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image on the Right */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/Burger1.png"
              alt="Main Course"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-12 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/bg1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto text-center text-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              {
                number: "420",
                label: "Professional Chefs",
                icon: "/image9.png",
              },
              {
                number: "320",
                label: "Items Of Food",
                icon: "/image8.png",
              },
              {
                number: "30+",
                label: "Years Of Experience",
                icon: "/image7.png",
              },
              {
                number: "220",
                label: "Happy Customers",
                icon: "/image6.png",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {/* Icon Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={60}
                    height={60}
                  />
                </div>
                {/* Stat Number */}
                <h2 className="text-4xl font-bold text-orange-500">
                  {stat.number}
                </h2>
                {/* Stat Label */}
                <p className="text-md mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dessert Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full relative left-10" // Adjusted class for moving to the right
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image on the Left */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/cupcake.png"
              alt="Dessert"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Dessert Menu Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Dessert
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Fig and lemon cake",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Creamy mascarpone cake",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Pastry, blueberries, lemon juice",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Pain au chocolat",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="py-12 px-4 md:px-6 container mx-auto">
        {/* Cup Image on Top */}
        <div className="flex justify-start mb-6">
          <Image
            src="/cup.png"
            alt="Cup Icon"
            width={30} // Adjust width of cup image
            height={30} // Adjust height of cup image
            className="rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Drinks Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Drinks</h2>
            <ul className="space-y-4">
              {[
                {
                  title: "Caffè macchiato",
                  desc: "Toasted French bread topped with romano, cheddar",
                  calories: "560 CAL",
                  price: "$32",
                },
                {
                  title: "Aperol Spritz Capacianno",
                  desc: "Gorgonzola, ricotta, mozzarella, taleggio",
                  calories: "700 CAL",
                  price: "$43",
                },
                {
                  title: "Caffe Latte Campuri",
                  desc: "Ground cumin, avocados, peeled and cubed",
                  calories: "1000 CAL",
                  price: "$14",
                },
                {
                  title: "Tormentoso BushTea Pintoage",
                  desc: "Spreadable cream cheese, crumbled blue cheese",
                  calories: "560 CAL",
                  price: "$35",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                    <span className="text-xs text-gray-400">
                      {item.calories}
                    </span>
                  </div>
                  <span className="font-bold text-orange-500 text-sm">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image on the Right */}
          <div className="w-full max-w-[250px] mx-auto">
            <Image
              src="/drinky.png"
              alt="Drinks"
              width={250}
              height={250}
              className="rounded-lg object-cover w-full h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

   
      {/* Partner Logos Section */}
      <div className="bg-gray-50 py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg text-gray-600">Partners & Clients</h3>
          <h1 className="text-3xl font-bold text-gray-800">We work with the best people</h1>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center items-center flex-wrap gap-8">
          {[
            { id: 1, name: "Restaurant", logo: "/Dish1.png" },
            { id: 2, name: "Bakery", logo: "/Bakery.png" },
            { id: 3, name: "Fork & Spoon", logo: "/Fork.png" },
            { id: 4, name: "Wolf Coffee", logo: "/WolfCoffee.png" },
            { id: 5, name: "Bistro", logo: "/Bistro.png" },
            { id: 6, name: "Cupcake", logo: "/Bakery1.png" },
          ].map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center space-y-2 transition-all duration-300 transform hover:scale-105"
            >
              {/* Logo Image */}
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={100}
                height={100}
              />
              {/* Text */}
              <p className="text-sm text-gray-500">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
