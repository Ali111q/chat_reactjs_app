import { Avatar, Box, Button, colors, Input, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StyledInput from './StyledInput'
import { Person, SignIn, TrademarkRegistered } from 'phosphor-react'
import { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { faker } from '@faker-js/faker'


function Register() {
    const theme = useTheme()

    return (
        <Box width={"30vw"} height="fit-content" sx={{
            border: 1,
            borderRadius: 1.5,
            borderColor: theme.palette.primary.main,
            borderWidth: 2.5
        }} >
            <Stack direction={"column"} height="100%" alignItems={"center"} spacing={3} padding={3} >
                
             <Avatar  sx={{
                width:100,
                height:100,
                cursor: "pointer",
                padding: "28px 10px",
                color: "#fff",
                background: "#00f",
                borderRadius: "50%",
               }} > <input type="file"  style={{
                cursor: "pointer",
                opacity:0,
                
                
            
               }} /></Avatar>
               <StyledInput sx={{width:"80%"}} label="Full Name" />
               <StyledInput sx={{width:"80%"}} label="username" />
               <StyledInput sx={{width:"80%"}} label="Bio" />
               
               <Button variant='outlined' startIcon={<TrademarkRegistered/>}  >
                   Register
                </Button>

            </Stack>
        </Box>
    )
}

export default Register