import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Chart from "chart.js/auto";
import WaterLineChartMain from "./WaterLineChartMain";
import Home from "./components/Home";
import ChartPage from "./pages/ChartPage";

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
          className={`flex flex-col bg-gray-300 items-center  min-h-screen`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<ChartPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
