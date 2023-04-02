import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavBar from "./StyledNavBar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavBar>
      <Outlet />

      </StyledNavBar>
    </>
  );
};

export default SharedLayout;
