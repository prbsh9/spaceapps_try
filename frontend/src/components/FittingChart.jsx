import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// import ocean_chart from "";

const FittingChart = () => {
  // Dummy data for temperature, precipitation, and freshwater availability
  const [data, setData] = useState();

  // Configuration options for the chart
  const options = {};

  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          Linear Regression Analysis: Year vs Temperature Anomaly (C)
        </h1>
        <p className="text-lg">
          In this analysis, we explore the relationship between time (Year) and
          Temperature Anomaly (C) using linear regression. Temperature anomalies
          represent deviations from a reference temperature, helping us
          understand how temperatures have changed over the years. This analysis
          aims to uncover any linear trends in temperature anomalies over time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ocean Warming Over Time</h2>

        {/* <Line data={data} options={options} /> */}
        {/* <img src={"ocean_warming_over_time.png"} alt="Ocean Warming Chart" /> */}
        <img
          src={process.env.PUBLIC_URL + "/fitting_global_temp.png"}
          alt="Global Warming fitting"
        />
      </section>
    </div>
  );
};

export default FittingChart;
