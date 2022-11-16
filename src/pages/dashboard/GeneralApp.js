import Chats from "./Chats";
import React, { lazy, Suspense } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/animate/Conversation";
import { useSelector } from "react-redux";
import Contact from "../../components/settings/Contact";


const Cat = lazy(() => import('../../components/Cat'))

const GeneralApp = () => {
  const {sideBar} = useSelector(store=>store.app)
  console.log(sideBar.open);

const theme = useTheme()
  return (
    <>
    <Stack direction={"row"} sx={{
      width:"100%",

    }} >
      <Chats />
      <Box sx={{
      height:"100%",
      width: sideBar.open? "calc(100vw - 740px)":"calc(100vw - 420px)",
      backgroundColor:theme.palette.mode=="light"? "#f0f4fa":theme.palette.background.default
    }}>
      <Conversation/>
      </Box>
      {sideBar.open&& <Contact/>}
      </Stack>
    </>
  );
};

export default GeneralApp;
