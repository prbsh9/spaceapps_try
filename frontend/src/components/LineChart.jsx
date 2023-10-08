import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const WaterAvailabilityChart = () => {
  // Dummy data for temperature, precipitation, and freshwater availability
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api/waterdata/")
      .then((response) => response.json())
      .then((data) => {
        setData({
          labels: data.map((item) => item.year),
          datasets: [
            {
              label: "Temperature (°C)",
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.3)",
              data: data.map((item) => item.temperature),
              yAxisID: "y-axis-1",
            },
            {
              label: "Precipitation (mm)",
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              data: data.map((item) => item.precipitation),
              yAxisID: "y-axis-2",
            },
            {
              label: "Freshwater Availability",
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              data: data.map((item) => item.freshwater_availability),
              yAxisID: "y-axis-1",
            },
          ],
        });
      });
  }, []);

  // Configuration options for the chart
  const options = {
    scales: {
      yAxes: [
        {
          id: "y-axis-1",
          type: "linear",
          position: "left",
          scaleLabel: {
            display: true,
            labelString: "Temperature (°C) / Freshwater Availability",
          },
        },
        {
          id: "y-axis-2",
          type: "linear",
          position: "right",
          scaleLabel: {
            display: true,
            labelString: "Precipitation (mm)",
          },
        },
      ],
    },
  };

  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          Understanding Water Availability
        </h1>
        <p className="text-lg">
          Water is essential for life, and its availability is changing. Explore
          how temperature and precipitation affect freshwater resources.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Freshwater Availability Over Time
        </h2>

        <Line data={data} options={options} />
      </section>
    </div>
  );
};

export default WaterAvailabilityChart;
