import { Box, Stack,  Badge,  IconButton,  TextField, InputAdornment } from "@mui/material"

import { styled, useTheme } from "@mui/material/styles";
import Footer from "./Footer";

import Header from "./Header";
import Message from "./message";







const Conversation = () => {
    const theme = useTheme()
    return (
        <Stack
            sx={{ height: "100%", maxHeight: "100vh", width: "auto", position:"relative" }}>

         <Header/>
            <Box
                width={"100%"}
                sx={{ flexGrow: 1 }}
            >
                <Message/>
            </Box>
          <Footer/>
        </Stack>
    )
}

export default Conversation