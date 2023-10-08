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
        <h1 className="text-3xl font-semibold mb-4">
          Global Surface Temperature Anomaly (1880-2020)
        </h1>
        <p className="text-lg">
          The chart illustrates changes in global surface temperatures relative
          to the long-term average from 1951 to 1980.
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
        *Note: The chart above is through data of climate.nasa.gov
      </section>
    </div>
  );
};

export default GlobalWarmingChart;
