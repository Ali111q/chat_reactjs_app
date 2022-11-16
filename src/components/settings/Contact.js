import { Box,Stack } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material/styles'

const Contact = () => {
    const theme= useTheme();
  return (
    <Box sx={{
        width:32, height:"100vh",
    }} >
        <Stack sx={{
            height:"100%"
        }} >
            <Box sx={
                {boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)",
            width:"100%",
        background:theme.palette.mode=="light"?"#F8FAff":theme.palette.background}
            } >
                <Stack sx={{height:"100%", p: 2}} direction="row" ></Stack>

            </Box>
        </Stack>
    </Box>
  )
}

export default Contact