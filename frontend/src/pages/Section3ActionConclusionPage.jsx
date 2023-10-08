import React from "react";
import Navigation from "../components/Navigation";

const Section3 = () => {
  // Define the link to the next section (if any) or any other appropriate link
  const nextSectionLink = "/fitting"; // Replace with the actual link

  return (
    <div className="bg-white max-w-4xl p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        Section 4: Implications, Call to Action, and Conclusion
      </h1>
      <p className="text-gray-700 mb-4">
        In this section, we will explore the implications of climate change and
        the changing water cycle. We'll also discuss what actions can be taken
        to address these challenges and conclude our journey.
      </p>

      {/* Implications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Implications of Climate Change
        </h2>
        <p className="text-gray-700">
          Climate change has far-reaching implications for freshwater resources
          and the environment. Rising temperatures can lead to more frequent and
          severe droughts, affecting agriculture and water supply. Increased
          flooding can disrupt communities and ecosystems.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Call to Action</h2>
        <p className="text-gray-700">
          Addressing climate change and safeguarding our water resources require
          collective action. As individuals, communities, and nations, we can
          take steps to reduce our carbon footprint, conserve water, and support
          policies that promote sustainability.
        </p>
        Some examples of actions we can take include:
        <ol className="text-left list-decimal px-8 flex flex-col gap-4">
          <li>
            We Should try to save water by preventing excess use during routine
            tasks.
            <img
              className=""
              src={process.env.PUBLIC_URL + "/save_water.png"}
              alt="Global Warming"
            />
          </li>
          <li>
            We should promote clean energy sources over fossil fuels since
            carbon emission is a major cause for global warming.
            <img
              className="my-7"
              src={process.env.PUBLIC_URL + "/our_future.png"}
              alt="Global Warming"
            />
          </li>
          <li>
            We should plant trees and formulate strict rules against
            deforestation.
            <img
              className="my-7"
              src={process.env.PUBLIC_URL + "/plant.jpg"}
              alt="Global Warming"
            />
          </li>
          <li>
            Government should impose strict rules and regulations for those who
            pollute freshwater resources by sewage and garbage.
            <img
              src="https://www.americanrivers.org/wp-content/uploads/2023/01/gowanus-canal_credit-american-rivers.jpeg
          "
              alt="Global Warming"
            />
          </li>
          <li>
            We shouldn’t block land surfaces by tiles or cementing as it
            disturbs natural processes of underground rain water harvesting.
            <img
              className="my-7"
              src={process.env.PUBLIC_URL + "/land_surface.jpg"}
              alt="Global Warming"
            />
          </li>
        </ol>
      </div>

      {/* Conclusion */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700">
          Our journey through the global water cycle and its relationship with
          climate change has highlighted the importance of this vital resource.
          By understanding the challenges and opportunities ahead, we can work
          together to protect and preserve our freshwater resources for future
          generations.
        </p>
      </div>

      {/* Include the Navigation component at the end of the section */}
      <Navigation nextSectionLink={nextSectionLink} />
    </div>
  );
};

export default Section3;
