import React from "react";
import { ChildrenNodes } from "./types"
import { Box } from "@mui/material";
import Navbar from "./shared/navbar/Navbar";

const BaseLayout = ({ children }: ChildrenNodes) => {

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>
        <Box>
          <Navbar />
          {children}
        </Box>
      </Box>

    </>
  );
};

export default BaseLayout;