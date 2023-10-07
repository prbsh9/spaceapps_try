import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Chart from "chart.js/auto";
import WaterLineChartMain from "./WaterLineChartMain";
import Home from "./components/Home";
import InitialFreshWater from "./pages/InitialFreshWaterPage";
import InitialFreshWaterPage from "./pages/InitialFreshWaterPage";
import OceanWarmingPage from "./pages/OceanWarmingPage";
import GlobalWarmingPage from "./pages/GlobalWarmingPage";
import HemisphereChartPage from "./pages/HemisphereChartPage";
import ChartsMainPage from "./pages/Section2ChartsMainPage";
import Section3 from "./pages/Section3ActionConclusionPage";
import Section1WaterPathPage from "./pages/Section1WaterPathPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const getScreenWidth = () => window.innerWidth;
  const widthClass = getScreenWidth() < 640 ? "" : "w-3/4";

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main
          className={`flex background-content flex-col items-center pt-10 min-h-screen`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/climate_and_water_paths"
              element={<Section1WaterPathPage />}
            />
            <Route path="/charts" element={<ChartsMainPage />} />
            <Route path="/charts/ocean" element={<OceanWarmingPage />} />
            <Route path="/charts/global" element={<GlobalWarmingPage />} />
            <Route path="/charts/water" element={<InitialFreshWater />} />
            <Route
              path="/charts/hemisphere"
              element={<HemisphereChartPage />}
            />
            action_and_implications
            <Route path="/section3" element={<Section3 />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
