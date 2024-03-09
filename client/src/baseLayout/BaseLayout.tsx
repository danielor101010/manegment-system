import React from "react";
import { ChildrenNodes } from "./types"
import { Box } from "@mui/material";
import Navbar from "./shared/navbar/Navbar";

const BaseLayout = ({ children }: ChildrenNodes) => {
  const adminPages = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Workers", path: "/workers" },
    { name: "Admin", path: "/admin" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const employeePages = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Employee", path: "/employee" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

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