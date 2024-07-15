import { Box, Skeleton } from "@mui/material";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ContentWrapper = () => (
  <Suspense
    fallback={
      <Box
        sx={{
          height: "calc(100vh - 15rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rectangular" width={"80vw"} height={"80%"} />
      </Box>
    }
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh",
        width: "100vw",
      }}
    >
      <Outlet />
    </div>
  </Suspense>
);
export default ContentWrapper;
