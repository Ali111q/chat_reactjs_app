import { Box, Button, colors, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StyledInput from './StyledInput'
import { SignIn } from 'phosphor-react'
import { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { signIn, user, verifyCode } from '../../data/firebase'


function LoginForm() {
    const theme = useTheme()
    const [hidden, setHidden] = useState(true)
    const [value, setValue] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const handleChange = (newValue) => {
        setPhoneNumber(newValue.target.value)
    }
    const handleCode = (newValue) => {
        setValue(newValue)
    }
    return (
        <Box width={"30vw"} height="fit-content" padding={3}  sx={{
            border: 1,
            borderRadius: 1.5,
            borderColor: theme.palette.primary.main,
            borderWidth: 2.5
        }} >
            <Stack direction={"column"} height="100%" spacing={3} alignItems={"center"} justifyContent="space-evenly" >
                {hidden && <StyledInput sx={{
                    width: "80%",
                    textAlign: "center"
                }}
                    onChange={handleChange}

                    label="Phone Number" />}
                {!hidden && <MuiOtpInput length={6} width="50%" value={value} onChange={handleCode} />}
                <Button variant='outlined' startIcon={<SignIn />} onClick={() => {
                    if (hidden) {
                        signIn(phoneNumber).then(e=>{
                            setHidden(h=>!h);
                        })
                    }else{
                        verifyCode(value).then(()=>{
                        console.log(user);

                        })

                    }
                }} >
                    {hidden ? "Login" : "verify Code"}

                </Button>
                <div id="recaptcha-container">
                </div>
            </Stack>
        </Box>
    )
}

export default LoginForm