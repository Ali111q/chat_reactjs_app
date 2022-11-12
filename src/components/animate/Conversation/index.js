import { Box, Stack,  Badge,  IconButton,  TextField, InputAdornment } from "@mui/material"

import { styled, useTheme } from "@mui/material/styles";
import Footer from "./Footer";

import Header from "./Header";





const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    }
}));


const Conversation = () => {
    const theme = useTheme()
    return (
        <Stack
            sx={{ height: "100%", maxHeight: "100vh", width: "auto", }}>

         <Header/>
            <Box
                width={"100%"}
                sx={{ flexGrow: 1 }}
            ></Box>
          <Footer/>
        </Stack>
    )
}

export default Conversation