import React from "react";
import Navigation from "../components/Navigation";

export default function DataAnalysisChartsPage({}) {
  const nextSectionLink = "/charts/ocean";

  return (
    <div className="bg-white mt-6 p-6 rounded-lg max-w-4xl shadow-md">
      <h2 className="text-xl font-bold">Section 3: Data Analysis</h2>
      <p className="mt-3">
        Here, we shall be analyzing the case of China to analyze the fresh water
        distribution in China, analyze the annual carbon emissions in China and
        see how fresh water distribution is being impacted by climate change.
      </p>
      <div className="items-center flex justify-center flex-col">
        <div className="image-desc m-8">
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/co2_china.png"}
            alt="china co2"
          />
          <span>
            In fact, China has been the highest emitter of carbon dioxide for a
            significant number of years. Due to this, there has been a severe
            impact of climate change on China. In fact, the images that are
            received from satellite images depict a very alarming situation.
          </span>
        </div>

        <div className="image-desc m-8">
          <img
            className="mb-2"
            src={process.env.PUBLIC_URL + "/china1.png"}
            alt="china1"
          />
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/china2.png"}
            alt="china2"
          />
          <span>
            The above pictures taken from NASA’s satellites shows how
            dramatically the fresh water is decreasing in China. This shows how
            the vegetation of China has been impacted by climate change and the
            adverse effects of it. The significant decrease in the level of
            freshwater implies that the biodiversity, topology and geological
            status of China has deteriorated over time. This means, there has
            been a significant decrease in the distribution of freshwater in
            China, and that the natural habitat is not suitable for the
            creatures there.
          </span>{" "}
          <span>
            In fact, one can attribute the decreasing level of fresh water to
            the increasing level of sea. Not only this, we can also attribute
            the increasing energy level of the sea to the increasing temperature
            of the earth.
          </span>
        </div>
        <div className="image-desc m-8">
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/ocean_level.png"}
            alt=""
          />
          <span>
            Pattern of increase in ocean level annually Fig: Difference of
            annual average temperature from standard annual temperature Sources:
            (https://science.nasa.gov/earth-science/focus-areas/climate-variability-and-change/ocean-physics/)
            From the data of NASA, the ocean level is increasing at an alarming
            rate. Not only this, but also the global temperature is increasing
            significantly. Global warming and climate change is also causing the
            increase in the internal energy of the water resources. It can be
            shown by the graph below:
          </span>
        </div>
        <div className="image-desc m-8">
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/ocean_energy.png"}
            alt=""
          />
          <span>
            The three graphs above show how significant the impact of climate
            change has been on the ocean level and ocean temperature. The energy
            of water molecules in the ocean is also increasing drastically. This
            contributes to the increase in volume of water. Further, during the
            times of natural disasters, this substantially increases the chances
            of increased disasters during the natural disasters like hurricanes.
            In fact, due to the high temperature in and around the sea, there is
            an increased chance of hurricanes and tornadoes
          </span>
        </div>

        <div className="image-desc m-8">
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/tornado.png"}
            alt=""
          />
          <span>
            Thus, based on the above evidence, we can conclude that the
            increasing temperature on earth is increasing the energy of oceans
            which is eventually leading to increased disasters like tornadoes
            and hurricanes.
          </span>
        </div>
      </div>

      <Navigation nextSectionLink={nextSectionLink} />
    </div>
  );
}
