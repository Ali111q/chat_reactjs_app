import { Box, IconButton, Stack, Divider, Avatar, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from '../../data/index'
import Logo from "../../assets/Images/logo.ico"
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker, Faker } from "@faker-js/faker";
import useSettings from '../../hooks/useSettings'

const MainLayout = () => {
  return (
    <>
       <Box alignItems={"center"} sx={{
        p: 2,
        backgroundColor: useTheme().palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "100px"

      }} >
        <Stack direction="column" sx={{ height: "100%" }} justifyContent="space-between" alignItems={"center"} spacing={3}>
        <Stack alignItems="center" spacing={4}>  <Box sx={{
            m: 2,
            backgroundColor: useTheme().palette.primary.main,
            width: 64,
            height: 64,
            borderRadius: 1.5
          }}>
            <img src={Logo} alt="Chat App logo" />
          </Box>
          <Stack
            spacing={3}
            direction="column"
            alignItems="center"
            sx={{
              width: "max-content"
            }} >
            {
              Nav_Buttons.map((e) => {
                return e.index === selected ? <Box sx={{
                  p: 1,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5
                }}>
                  <IconButton key={e.index} sx={{
                    color: "#fff",
                    width: "max-content"
                  }
                  }>
                    {e.icon}
                  </IconButton  >
                </Box> : <IconButton onClick={() => {
                  setSelected(e.index)
                }} key={e.index} sx={{
                  color: theme.palette.mode==="light"? "#000":"#fff",
                  width: "max-content"
                }
                }>
                  {e.icon}
                </IconButton >

              })}
            <Divider sx={{ width: 48 }} />
            {selected === 3 ? <Box sx={{
              p: 1,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5
            }}>
              <IconButton sx={{
                color: "#fff",
                width: "max-content"
              }
              }>
                <Gear />
              </IconButton  >
            </Box> : <IconButton onClick={() => {
              setSelected(3)
            }}>
              <Gear />
            </IconButton>}

          </Stack>
          </Stack>
          <Stack alignItems="center">
            <Switch defaultChecked onChange={()=>{onToggleMode()}} />
          <Avatar srcSet={faker.image.avatar()} />
        </Stack>
        </Stack>

      </Box>
      <Outlet />

      <Outlet />
    </>
  );
};

export default MainLayout;
