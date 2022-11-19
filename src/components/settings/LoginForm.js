import { Box, Button, colors, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StyledInput from './StyledInput'
import { SignIn } from 'phosphor-react'
import { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'


function LoginForm() {
    const theme = useTheme()
    const [hidden,setHidden]= useState(true)
    const [value, setValue] = useState('')

  const handleChange = (newValue) => {
    setValue(newValue)
  }
    return (
        <Box width={"30vw"} height="20vh" sx={{
            border: 1,
            borderRadius: 1.5,
            borderColor: theme.palette.primary.main,
            borderWidth: 2.5
        }} >
            <Stack direction={"column"} height="100%" alignItems={"center"} justifyContent="space-evenly" >
                {hidden&&<StyledInput sx={{
                    width: "80%",
                    textAlign:"center"    
                }}
                
                    label="Phone Number" />}
                  {!hidden&&  <MuiOtpInput length={6} width="50%"  value={value} onChange={handleChange} />}
                <Button variant='outlined' startIcon={<SignIn/>} onClick={()=>{setHidden(e=>!e)}} >
                   {hidden? "Login":"verify Code"}
                </Button>
            </Stack>
        </Box>
    )
}

export default LoginForm