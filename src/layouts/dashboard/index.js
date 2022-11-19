import { Box, IconButton, Stack, Divider, Avatar, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from '../../data/index'
import { Gear } from "phosphor-react";
import SideBar from "./SideBar";
import { user } from "../../data/firebase";





const DashboardLayout = () => {
  const theme = useTheme();
  console.log(useTheme());
  return (
    <Stack direction="row" >
      {user && <SideBar />}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
