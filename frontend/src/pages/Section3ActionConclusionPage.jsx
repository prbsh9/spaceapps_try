import React from "react";
import Navigation from "../components/Navigation";

const Section3 = () => {
  // Define the link to the next section (if any) or any other appropriate link
  const nextSectionLink = "/fitting"; // Replace with the actual link

  return (
    <div className="bg-white max-w-4xl p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        Section 3: Implications, Call to Action, and Conclusion
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
