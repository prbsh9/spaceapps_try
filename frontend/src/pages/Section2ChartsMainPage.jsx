import React from "react";
import Navigation from "../components/Navigation";

const ChartsMainPage = () => {
  const nextSectionLink = "/charts/ocean";

  return (
    <div className="bg-white mt-6 p-6 rounded-lg max-w-4xl shadow-md">
      <h2 className="text-xl font-bold">
        Section 2: Problems and then Exploring Charts
      </h2>
      <p className="mt-3">
        The problems: Due to global warming and climate change, there has been a
        substantial change in the freshwater distribution on the planet. There
        are some places where the volume of fresh water has substantially
        decreased while in others there the volume has dramatically increased.
        It has brought about changes in both the ecology, topology and
        vegetation of the planet. Here are some images taken from NASA
        satellites that justify these things:
      </p>

      <p className="mt-3">
        Let's take a brief look at what each chart represents.
      </p>
      <Navigation nextSectionLink={nextSectionLink} />
    </div>
  );
};

export default ChartsMainPage;
