import React from "react";
import Navigation from "../components/Navigation";

const MathematicalModelPage = () => {
  return (
    <div className="max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Mathematical Model</h1>

        {/* Introduction */}
        <section className="mb-6">
          <p className="mb-4">
            It has been stated that the increase in temperature by 1.5 degree
            celsius causes an increase in oceanic water level by 0.1 meters. If
            we assume that there is no change in the oceanic water level when
            the net change in annual temperature tends to zero, we can formulate
            a basic mathematical model that fits the aforementioned description.
          </p>
          <p className="mb-4">
            Based on the mathematical model we have created an application that
            asks users for expected increase in temperature as input, hence
            plots an estimated model of possible climate change if the parameter
            (annual change in temperature). Also, it gives people an indication
            through colors of lamps based on what level of impact or severity of
            the increase of water in the ocean, i.e., green color indicates
            minimal change in water level, yellow indicates a moderate change in
            water level and red indicates a substantially larger increase in
            water level.
          </p>
          <p className="mb-4">
            Similarly, we have further made a mathematical model that predicts
            how many people will be deprived of water when there is a specific
            change in the temperature. For this, we have assumed that the water
            in the earth is stored in the form of a sphere and how a small
            change in the radius of the sphere impacts the fresh water
            distribution. For this, we have firstly made an assumption that an
            average human uses 20 liters on a daily basis, the increase in the
            water level of the ocean is directly linked to the decrease in the
            freshwater. Based on the change in volume of freshwater and the
            average water each person uses, we have determined how many people
            will be deprived of freshwater in the upcoming year. (We have
            assumed that earth’s freshwater is 0.01% of the actual water
            capacity of earth i.e. 370 quintillion gallons).
          </p>
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/model1.png"}
            alt="model1"
          />
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/model2.png"}
            alt="model2"
          />
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/model3.png"}
            alt="model3"
          />
        </section>

        {/* Conclusion */}
        {/* <section>
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            In this section, we have introduced the concepts of climate change
            and water paths. We've highlighted the importance of these concepts
            in the context of freshwater resource management and their
            connection to global climate patterns.
          </p>
          <p>
            As we proceed through this educational journey, we will delve deeper
            into these topics and explore how data and visualizations can help
            us understand the complex relationship between climate change and
            water paths.
          </p>
          <p>
            However, due to various factors, there has been a substantial change
            in the freshwater distribution pattern of earth.
          </p>
        </section> */}
      </div>
    </div>
  );
};

export default MathematicalModelPage;
