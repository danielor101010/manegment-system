import React from "react";
import { ChildrenNodes } from "./types"
import { Box } from "@mui/material";
import Navbar from "./shared/navbar/Navbar";
import { adminPages } from "./routes";

const BaseLayout = ({ children }: ChildrenNodes) => {

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>
      <Box>
        <Navbar pages={adminPages}/>
        {children}
      </Box>
      </Box>

    </>
  );
};

export default BaseLayout;