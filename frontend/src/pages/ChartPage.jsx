import React from "react";
import WaterLineChartMain from "../WaterLineChartMain";

export default function ChartPage() {
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";
  return (
    <div className="min-h-screen bg-gray-100">
      <main className={`flex flex-col items-center  min-h-screen`}>
        <div
          className={`bg-gray-200 bg-opacity-70 p-4 mt-5 rounded-lg ${widthClass}`}
        >
          {/* Nice heading for my charts below */}
          <WaterLineChartMain />
        </div>
      </main>
    </div>
  );
}
