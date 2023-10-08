import React from "react";

import OceanWarmingChart from "../components/OceanWarmingChart";
import Navigation from "../components/Navigation";
import GlobalWarmingChart from "../components/GlobalWarmingChart";
import FittingChart from "../components/FittingChart";

const ChartExplanation = () => {
  const model = {
    intercept: "Intercept Value Here",
    coefficient: "Coefficient Value Here",
  };

  return (
    <>
      {" "}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Linear Regression Analysis: Year vs Temperature Anomaly (C)
        </h1>
        <div className="text-xl leading-relaxed mb-4">
          <p>
            <strong>Introduction:</strong> In this analysis, we explore the
            relationship between time (Year) and Temperature Anomaly (C) using
            linear regression. Temperature anomalies represent deviations from a
            reference temperature, helping us understand how temperatures have
            changed over the years. This analysis aims to uncover any linear
            trends in temperature anomalies over time.
          </p>
        </div>
        <div className="text-xl leading-relaxed mb-4">
          <p>
            <strong>Variables:</strong>
            <br />
            <em>Year (X-axis):</em> The independent variable represents time,
            spanning across several years.
            <br />
            <em>Temperature Anomaly (C) (Y-axis):</em> The dependent variable is
            the temperature anomaly in degrees Celsius.
          </p>
        </div>
        <div className="text-xl leading-relaxed mb-4">
          <p>
            <strong>Methodology:</strong>
            <br />
            <ol className="list-decimal ml-6">
              <li>
                <strong>Data Extraction:</strong> We extracted the Year and
                Temperature Anomaly data from our dataset.
              </li>
              <li>
                <strong>Linear Regression Model:</strong> A Linear Regression
                model was created and fitted to the data. The model aimed to
                establish a linear relationship between Year and Temperature
                Anomaly.
              </li>
              <li>
                <strong>Predictions:</strong> The fitted model was used to make
                predictions about temperature anomalies based on the year.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-8 shadow-md p-6">
        <div className="text-xl leading-relaxed mb-4">
          <p>
            <strong>Conclusion:</strong>
            <br />
            The linear regression analysis of Year vs Temperature Anomaly
            reveals several key insights:
            <br />- <strong>Positive Trend:</strong> The positive coefficient of
            Year suggests that there is an upward trend in temperature anomalies
            over time.
            <br />- <strong>Linear Relationship:</strong> The linear regression
            line shows that the increase in temperature anomalies is roughly
            linear, with a clear positive slope.
          </p>
        </div>
        <div className="text-xl leading-relaxed">
          <p>
            <strong>Takeaways:</strong>
            <br />
            <ol className="list-decimal ml-6">
              <li>
                <strong>Warming Trend:</strong> The analysis suggests a warming
                trend over the years, with temperature anomalies increasing
                linearly.
              </li>
              <li>
                <strong>Climate Monitoring:</strong> Understanding this linear
                relationship is crucial for climate monitoring and policymaking
                to address the challenges posed by global warming.
              </li>
              <li>
                <strong>Further Analysis:</strong> While linear regression
                provides valuable insights, more advanced models may be needed
                to capture the complexity of climate data.
              </li>
              <li>
                <strong>Data Quality:</strong> Ensure data quality and consider
                other factors that could influence temperature anomalies for a
                comprehensive analysis.
              </li>
            </ol>
          </p>
        </div>
      </div>
    </>
  );
};

export default function FittingPage() {
  const nextSectionLink = "/models";
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";
  return (
    <div>
      <div className="min-h-screen ">
        <main className={`flex flex-col items-center  min-h-screen`}>
          <div className={`bg-gray-200 p-4 mt-5 rounded-lg ${widthClass}`}>
            <FittingChart />
            <ChartExplanation />
            <Navigation nextSectionLink={nextSectionLink} />
          </div>
        </main>
      </div>
    </div>
  );
}
