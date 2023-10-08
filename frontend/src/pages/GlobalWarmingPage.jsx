import React from "react";

import OceanWarmingChart from "../components/OceanWarmingChart";
import Navigation from "../components/Navigation";
import GlobalWarmingChart from "../components/GlobalWarmingChart";

const ChartExplanation = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Understanding the Chart</h2>
      <p className="text-lg">
        <ul className="flex flex-col gap-2 list-disc px-6 text-justify">
          <li>
            The temperature anomaly is a measure of how much the global surface
            temperature deviates from this reference period.
          </li>
          <li>
            Each data point on the chart represents a specific year, starting
            from 1880 up to 2020, and shows the temperature anomaly for that
            year in degrees Celsius.
          </li>
          <li>
            Notably, the year 2020 statistically tied with 2016 as the hottest
            year on record since recordkeeping began in 1880, as reported by
            NASA's Goddard Institute for Space Studies (GISS).
          </li>
        </ul>
      </p>
    </section>
  );
};

const ChartInteractivity = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Exploring Variables</h2>
      <p className="text-lg text-left px-6">
        <ul className="list-disc ">
          <li>
            <strong> Year No: </strong> This column represents the specific year
            for which temperature anomalies are recorded, ranging from 1880 to
            2020. Temperature Anomaly (C): Similar to the "Smoothing" column,
            this represents the temperature anomaly but explicitly states that
            the values are in degrees Celsius.
          </li>
          <li>
            <strong>Temperature Anomaly (C): </strong>Similar to the "Smoothing"
            column, this represents the temperature anomaly but explicitly
            states that the values are in degrees Celsius.
          </li>
        </ul>
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
            <Navigation nextSectionLink={nextSectionLink} />
          </div>
        </main>
      </div>
    </div>
  );
}
