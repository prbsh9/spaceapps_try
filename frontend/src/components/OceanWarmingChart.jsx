import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// import ocean_chart from "";

const OceanWarmingChart = () => {
  // Dummy data for temperature, precipitation, and freshwater availability
  const [data, setData] = useState();

  // Configuration options for the chart
  const options = {};

  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          {" "}
          Global Ocean Heat Content Increase (1955-2022)
        </h1>
        <p className="text-lg">
          The chart displays the increase in global ocean heat content since
          modern recordkeeping began in 1955. This increase is a significant
          indicator of global warming.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ocean Warming Over Time</h2>

        {/* <Line data={data} options={options} /> */}
        {/* <img src={"ocean_warming_over_time.png"} alt="Ocean Warming Chart" /> */}
        <img
          src={process.env.PUBLIC_URL + "/ocean_warming_over_time.png"}
          alt="Your Image"
        />
        <p>
          *Note: The data is plotted in python since we did all analysis and
          regression fitting with python but another plot is done through JS.
        </p>
      </section>
    </div>
  );
};

export default OceanWarmingChart;
