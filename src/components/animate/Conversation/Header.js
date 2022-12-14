import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Box, Stack, Avatar,  Typography, IconButton, Divider, useTheme, } from "@mui/material"
import StyledBadge from "../../settings/StyledBadge";
import { ToggleSideBar } from "../../../redux/slices/app";
import { useDispatch } from "react-redux";
import { logOut } from "../../../data/firebase";




const Header = () => {
    const dispatch = useDispatch()
    const theme = useTheme()


    return (
        <Box p={2} sx={{ height: 100, width: "100%", backgroundColor: theme.palette.mode == "light" ? "#f8faff" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>
            <Stack
                direction={"row"} spacing={2} alignItems="center" p={5}
                sx={{
                    width: "100%", height: "100%", justifyContent: "space-between"
                }}
            ><Stack spacing={2} direction="row" onClick={()=>{
                dispatch(ToggleSideBar()); 
            }} >
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
                    <IconButton onClick={()=>{
                        logOut()
                    }} >
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
    )
}

export default Header