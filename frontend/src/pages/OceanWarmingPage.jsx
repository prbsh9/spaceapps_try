import React from "react";

import OceanWarmingChart from "../components/OceanWarmingChart";
import Navigation from "../components/Navigation";

const ChartExplanation = () => {
  return (
    <section className="my-8 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Understanding the Chart</h2>
      <p className="text-lg text-justify">
        <ul className="list-disc pl-6">
          <li>
            Each data point on the chart represents a five-year average,
            expressed in <strong>zettajoules (ZJ) </strong>. For example, the
            2020 data point represents the average change in ocean heat content
            from 1955 to 2022 for the years 2018 to 2022.
          </li>
          <li>
            The shaded blue region around the data points indicates a{" "}
            <strong> 95% margin of uncertainty </strong>, emphasizing the
            reliability of the data.
          </li>
          <li>
            The heat stored in the ocean has a crucial impact on the Earth's
            climate. It causes seawater to expand, contributing to approximately
            one-third to one-half of global sea-level rise.
          </li>
          <li>
            Most of the added energy is stored near the ocean's surface, at
            depths ranging from zero to 700 meters.
          </li>
        </ul>

        {/* Additional Details */}
        <p className="mt-4">
          It's important to note that the last decade (2013-2022) was the
          ocean's warmest on record since at least the 1800s, with 2022 being
          the warmest recorded year. This warming trend highlights the effects
          of global climate change.
        </p>
      </p>
    </section>
  );
};

const ChartInteractivity = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Exploring Variables</h2>
      <ul className="text-justify mx-4 ">
        <li>
          <strong>YEAR: </strong> This column represents the midpoint of the
          five-year period for which the average ocean heat content change is
          calculated.
        </li>
        <li>
          <strong>WO (Zettajoules): </strong>It shows the increase in ocean heat
          content for the given period in Zettajoules. Positive values indicate
          an increase in heat content, which is a measure of global warming.
        </li>
      </ul>
    </section>
  );
};
export default function OceanWarmingPage() {
  const nextSectionLink = "../charts/global";
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";
  return (
    <div>
      <div className="min-h-screen mx-4 ">
        <main className={`flex flex-col items-center  min-h-screen`}>
          <div
            className={`bg-gray-200 p-4 mx-4  mt-5 rounded-lg ${widthClass}`}
          >
            <OceanWarmingChart />
            <ChartExplanation />
            <ChartInteractivity />
            <Navigation nextSectionLink={nextSectionLink} />
          </div>
        </main>
      </div>
    </div>
  );
}
