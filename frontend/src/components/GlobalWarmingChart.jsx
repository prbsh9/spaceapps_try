import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// import ocean_chart from "";

const GlobalWarmingChart = () => {
  // Dummy data for temperature, precipitation, and freshwater availability
  const [data, setData] = useState();

  // Configuration options for the chart
  const options = {};

  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">Global Warming Chart</h1>
        <p className="text-lg">
          Global warming similar chart where as year goes from 1960 to present
          the global warming is increasing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ocean Warming Over Time</h2>

        {/* <Line data={data} options={options} /> */}
        {/* <img src={"ocean_warming_over_time.png"} alt="Ocean Warming Chart" /> */}
        <img
          src={process.env.PUBLIC_URL + "/global_warming.png"}
          alt="Global Warming"
        />
      </section>
    </div>
  );
};

export default GlobalWarmingChart;
