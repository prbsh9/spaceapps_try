import React from "react";

import OceanWarmingChart from "../components/OceanWarmingChart";
import Navigation from "../components/Navigation";
import GlobalWarmingChart from "../components/GlobalWarmingChart";

const Conclusion = () => {
  const nextSectionLink = "/section3";

  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Conclusion and Takeaways</h2>
      <p className="text-lg">
        Climate change affects the availability of freshwater resources. As
        temperatures rise and precipitation patterns change, understanding these
        variables is crucial. It's our responsibility to protect and manage this
        vital resource for future generations.
      </p>
    </section>
  );
};

const ChartExplanation = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Understanding the Chart</h2>
      <p className="text-lg">
        In the chart below, you can see how freshwater availability changes over
        time. The x-axis represents years, and the y-axis represents freshwater
        availability in cubic kilometers.
      </p>
    </section>
  );
};

const ChartInteractivity = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Exploring Variables</h2>
      <p className="text-lg">
        Hover over data points on the chart to see specific values for each
        year. Temperature and precipitation play key roles in determining
        freshwater availability. Understanding these variables is essential to
        grasp the impact of climate change.
      </p>
    </section>
  );
};
export default function GlobalWarmingPage() {
  const nextSectionLink = "../charts/water";
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";
  return (
    <div>
      <div className="min-h-screen ">
        <main className={`flex flex-col items-center  min-h-screen`}>
          <div className={`bg-gray-200 p-4 mt-5 rounded-lg ${widthClass}`}>
            <GlobalWarmingChart />
            <ChartExplanation />
            <ChartInteractivity />
            <Conclusion />
            <Navigation nextSectionLink={nextSectionLink} />
          </div>
        </main>
      </div>
    </div>
  );
}
