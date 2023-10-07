import React from "react";
import Navigation from "../components/Navigation";

const Section1WaterPathPage = () => {
  const nextSectionLink = "/charts";
  return (
    <div className="max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Understanding Climate Change and Water Paths
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            Welcome to Section 1 of our educational journey. In this section, we
            will explore the critical concepts of climate change and the
            intricate pathways that water takes across our planet. Understanding
            these fundamentals is essential for comprehending the broader
            picture of climate and water resource management.
          </p>
        </section>

        {/* Climate Change */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Climate Change</h2>
          <p>
            <strong>Climate change</strong> refers to long-term alterations in
            Earth's climate patterns. It encompasses various phenomena,
            including rising global temperatures, shifting weather patterns, and
            increasing instances of extreme weather events. Climate change is
            primarily driven by human activities, such as the burning of fossil
            fuels, deforestation, and industrial processes.
          </p>
          <p>
            The consequences of climate change extend to every corner of the
            planet, affecting ecosystems, weather systems, and, notably, the
            availability of freshwater resources.
          </p>
        </section>

        {/* Water Paths */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Water Paths</h2>
          <p>
            <strong>Water paths</strong> describe the journey that water takes
            as it moves through the Earth's various reservoirs and cycles. This
            journey includes processes like evaporation from oceans,
            condensation in the atmosphere, precipitation, runoff, and
            groundwater recharge. Water paths are a fundamental component of
            Earth's climate system.
          </p>
          <p>
            Understanding these water paths is crucial for grasping how climate
            change impacts the availability of freshwater resources and how
            this, in turn, affects ecosystems and human societies.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            An Overview to Water Cycle Process in Earth:
          </h2>
          <p>
            The complete cycle of water on earth is quite an interesting
            process. The perpetual process of rain which might seem instinctive
            to many, has a number of processes to go through.
          </p>

          <p>
            Sea water (inclusive of ocean) is the main water source in the
            planet, however, due to the presence of high amounts of salt
            concentration in water, It isn’t drinkable. In fact, the ocean, the
            largest source of water, is the end point of all the water resources
            like rivers. Only the fresh water available through lakes, rivers
            and glaciers which contain acceptable levels of salt suitable for
            drinking. Even though almost 70% of earth is made up of water, only
            a small amount(0.01) of water is suitable for drinking.
          </p>
          <p>
            The sun rays falling in the larger water surfaces cause the water in
            oceans to evaporate. Due to high specific heat capacity of water,
            water takes much more time to heat than the land mass. This means
            that the air above the land heats up faster than that of air and
            rises up. This creates a vacuum space above the land. To compensate
            for this vacuum, the water vapor filled with water from the ocean
            moves towards the land in the form of clouds by the action of wind.
            When these clouds rise higher, they tend to cool and the separate
            water molecules (in the form of air) bind together to form larger
            and heavier molecules in liquid states. This process is called
            condensation. At the end, when air molecules become heavy enough
            that they can withstand the upthrust of the clouds, water falls down
            in the form of rain. This rain goes to the rivers, falls in the soil
            and other water resources.
          </p>
          <p>
            The water that falls deposits in the rivers and eventually goes to
            the ocean and in this way the water cycle of the earth is
            maintained.{" "}
          </p>
        </section>

        {/* Conclusion */}
        <section>
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
          <Navigation nextSectionLink={nextSectionLink} />
        </section>
      </div>
    </div>
  );
};

export default Section1WaterPathPage;
