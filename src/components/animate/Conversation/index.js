import { Box, Stack, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from "@mui/material"
import { faker } from "@faker-js/faker";
import { styled, useTheme } from "@mui/material/styles";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";
import { borderRadius } from "@mui/system";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

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

            <Box p={2} sx={{ height: 100, width: "100%", backgroundColor:theme.palette.mode=="light"? "#f8faff":theme.palette.background.paper , boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>
                <Stack
                    direction={"row"} spacing={2} alignItems="center" p={5}
                    sx={{
                        width: "100%", height: "100%", justifyContent: "space-between"
                    }}
                ><Stack spacing={2} direction="row" >
                        <Box>
                            <StyledBadge
                                overlap="circular" anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right"
                                }}
                                variant="dot">
                                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                            </StyledBadge>
                        </Box>
                        <Stack>

                            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                            <Typography variant="caption">Online</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} alignItems="center" spacing={3}>
                        <IconButton>
                            <VideoCamera />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass />
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <IconButton>
                            <CaretDown />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
            <Box
                width={"100%"}
                sx={{ flexGrow: 1 }}
            ></Box>
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
        </Stack>
    )
}

export default Conversation