import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavigateToPages from "./NavigateToPages";
export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-center text-white max-w-4xl mt-16 p-6">
      {/* Section 1: Title and Motto */}
      <div className="text-center flex flex-col gap-16  mt-16 pb-96">
        <h1 className="text-7xl  font-dancing font-bold">
          Team Water For Life
        </h1>
        <h2 className="text-3xl mt-2 font-dancing">
          We will explore innovative ways to visualize and interact with NASA
          data, making it more accessible and engaging for users, fostering a
          deeper understanding of the water cycle.
        </h2>
      </div>

      {/* Section 3: Water Cycle Explanation */}
      <div className=" rounded-lg shadow-md bg-gray-800 p-3 text-gray-300">
        <h2 className="text-3xl font-bold text-blue-500">
          Understanding the Water Cycle
        </h2>
        <p className="mt-4 text-xl leading-relaxed">
          The complete cycle of water on earth is quite an interesting process.
          The perpetual process of rain which might seem instinctive to many,
          has a number of processes to go through. Sea water (inclusive of
          ocean) is the main water source in the planet, however, due to high
          concentration of water, the water isn’t drinkable. In fact, the ocean,
          the largest source of water, is the end point of all the water
          resources like rivers. Only the fresh water available through lakes,
          rivers and glaciers which contain acceptable levels of salt suitable
          for drinking. Even though almost 70% of earth is made up of water,
          only a small amount of water is suitable for drinking.
        </p>
      </div>
      <NavigateToPages />
    </div>
  );
}
