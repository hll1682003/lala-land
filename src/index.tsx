import React, { StrictMode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { theme } from "./theme/index";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

const rootContainer = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootContainer);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
