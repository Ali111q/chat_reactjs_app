import {  LinkSimple, PaperPlaneTilt ,    Smiley,  } from "phosphor-react";
import { Box, Stack,  Badge,  IconButton,  TextField, InputAdornment, useTheme } from "@mui/material"
import StyledInput from "../../settings/StyledInput";

const Footer = ()=>{
    const theme = useTheme()
    return(
        <Box sx={{ height: 110, width: "100%", backgroundColor:theme.palette.mode=="light"? "#f8faff":theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>

        <Stack p={2} direction="row" alignItems="center" spacing={3} >
            <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
                disableUnderline: true,
                startAdornment: <InputAdornment>
                    <IconButton>
                        <LinkSimple />
                    </IconButton>
                </InputAdornment>,
                endAdornment: <InputAdornment>
                    <IconButton>
                        <Smiley />
                    </IconButton>
                </InputAdornment>,

            }} />  <IconButton>
            <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5  }} alignItems="center" >
              <Stack alignItems="center" justifyContent="center" width="100%" height="100%">
                    <PaperPlaneTilt color="#fff"/>
                    </Stack>

            </Box></IconButton>
        </Stack>

    </Box>
    )
}

export default Footer