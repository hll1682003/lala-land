import React from "react";
import { ResponsiveAppBar } from "./components/HeadBar/HeadBar";
import "./global.scss";
import ContentWrapper from "./components/ContentWrappter";
import { Footer } from "./components";
import CssBaseline from "@mui/material/CssBaseline";
const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ResponsiveAppBar />

        <ContentWrapper />

        <Footer />
      </div>
    </>
  );
};

export default App;
