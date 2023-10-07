import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" min-h-screen text-white max-w-4xl my-16 p-6">
      {/* Section 1: Title and Motto */}
      <div className="text-center py-16">
        <h1 className="text-7xl  font-dancing font-bold">
          Team Water For Life
        </h1>
        <h2 className="text-2xl mt-2 font-dancing">
          Motto: Whatever goes here idk
        </h2>
      </div>

      {/* Section 2: Project Description */}
      <div className="p-8 mt-6 rounded-lg shadow-md bg-gray-800 text-gray-300">
        <h1 className="text-3xl font-bold text-blue-500">
          Project Description
        </h1>
        <p className="mt-4 text-xl leading-relaxed">
          Your challenge is to create a compelling visual tool that uses data
          from NASA satellites to help elementary, middle, or high school
          students better understand the complete path of water across the
          entire Earth system and how the availability of this critical resource
          is affected by our changing climate. You can tell this story from the
          global perspective, zoom in on specific regions, or even show the
          impacts on a particular community. You can also tell the story in a
          variety of ways, from a single data visualization to a series of
          infographics based on real mission data – or something more creative!
        </p>
        <p className="mt-4 text-xl leading-relaxed">
          Think about how your tool can illustrate the complete path of water
          through the Earth system, including its origin in the ocean, how it
          travels through the atmosphere, sinks on land, and how it is used and
          recycled before returning to the ocean. How will you explain and
          depict the processes in the water supply-demand chain, and how they
          change under the influence of planetary warming (e.g., intensification
          of hydroclimatic extremes, uneven distribution of freshwater resources
          on land, over/under supply of moisture from the ocean causing
          flood/drought events, and other deviations from the norms in the
          global water cycle)?
        </p>
      </div>

      {/* Section 3: Water Cycle Explanation */}
      <div className="mt-8 p-8 rounded-lg shadow-md bg-gray-800 text-gray-300">
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

      {/* Section 4: Links to Charts */}
      <div className="my-6 p-6 rounded-lg shadow-md bg-gray-800 text-gray-300">
        <h2 className="text-3xl font-bold mb-6">
          Navigate to Different Sections
        </h2>
        <ul className="list-disc ml-6 text-xl">
          <li className="mb-4">
            <Link
              to="/climate_and_water_paths"
              className="text-blue-500 hover:underline"
            >
              Section 1: Understanding Climate Change and Water Paths
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/charts" className="text-blue-500 hover:underline">
              Section 2: Exploring the Charts
            </Link>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <Link
                  to="/charts/ocean"
                  className="text-blue-500 hover:underline"
                >
                  Chart 1: Ocean Warming Over Time
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/charts/global"
                  className="text-blue-500 hover:underline"
                >
                  Chart 2: Global Warming Over Time
                </Link>
              </li>
              <li>
                <Link
                  to="/charts/water"
                  className="text-blue-500 hover:underline"
                >
                  Chart 3: Heat Content Comparison
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/action_and_implications"
              className="text-blue-500 hover:underline"
            >
              Section 3: Implications, Call to Action, and Conclusion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
