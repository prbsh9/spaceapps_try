import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavigateToPages() {
  return (
    <div>
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

          <li>
            <Link to="/problem" className="text-blue-500 hover:underline ">
              Section 2: Problems
            </Link>
          </li>

          <li className="mb-4">
            <Link to="/data_analysis" className="text-blue-500 hover:underline">
              Section 3: Data Analysis
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
            <Link to="/section3" className="text-blue-500 hover:underline ">
              Section 4: Implications, Call to Action, and Conclusion
            </Link>
          </li>
          <li className="my-2">
            <Link to="/fitting" className="text-blue-500 hover:underline">
              Section 5: Fitting the Global Temperature with Linear Regression
            </Link>
          </li>
          <li className="my-2">
            <Link to="/models" className="text-blue-500 hover:underline">
              Section 5: Mathematical Model
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
