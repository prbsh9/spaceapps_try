import React from "react";
import WaterLineChartMain from "../WaterLineChartMain";
import Navigation from "../components/Navigation";

export default function InitialFreshWaterPage() {
  const nextSectionLink = "/section3";
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";
  return (
    <div className="min-h-screen ">
      <main className={`flex flex-col items-center  min-h-screen`}>
        <div className={`bg-gray-200  p-4 mt-5 rounded-lg ${widthClass}`}>
          {/* Nice heading for my charts below */}
          <WaterLineChartMain />
          <Navigation nextSectionLink={nextSectionLink} />
        </div>
      </main>
    </div>
  );
}
