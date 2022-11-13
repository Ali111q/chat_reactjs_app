import Chats from "./Chats";
import React, { lazy, Suspense } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/animate/Conversation";

const Cat = lazy(() => import('../../components/Cat'))

const GeneralApp = () => {
const theme = useTheme()
  return (
    <>
    <Stack direction={"row"} sx={{
      width:"100%",

    }} >
      <Chats />
      <Box sx={{
      height:"100%",
      width:"calc(100vw - 420px)",
      backgroundColor:theme.palette.mode=="light"? "#f0f4fa":theme.palette.background.default
    }}>
      <Conversation/>
      </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
