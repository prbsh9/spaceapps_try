import React from "react";
import Navigation from "../components/Navigation";

const ProblemsMainPage = () => {
  const nextSectionLink = "/data_analysis";

  return (
    <div className="bg-white mt-6 p-6 rounded-lg max-w-4xl shadow-md">
      <h2 className="text-xl font-bold">
        Section 2: Problems and then Exploring Charts
      </h2>
      <p className="mt-3">
        Due to global warming and climate change, there has been a substantial
        change in the freshwater distribution on the planet. There are some
        places where the volume of fresh water has substantially decreased while
        in others there the volume has dramatically increased. It has brought
        about changes in both the ecology, topology and vegetation of the
        planet. Here are some images taken from NASA satellites that justify
        these things:
      </p>
      <div className="items-center flex justify-center flex-col">
        <div className="image-desc m-4">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/greenland_ice.png"}
            alt="Greenland ice"
          />
          <span> Decreasing ice level in greenland</span>
        </div>

        <div className="image-desc m-4">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/california.png"}
            alt="California"
          />
          <span>
            Increase in snow in California which is different from usual winters
            in the place.
          </span>
        </div>

        <div className="image-desc m-4">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/drying_peru.png"}
            alt="drying peru"
          />
          <span>Drying of Peru’s of Paso Reservoir</span>
        </div>
      </div>

      <Navigation nextSectionLink={nextSectionLink} />
    </div>
  );
};

export default ProblemsMainPage;
