import { Avatar, Box, Button, Divider, IconButton, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { X, Phone, VideoCamera, CaretRight, Star, Bell, Prohibit, Trash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSideBar } from '../../redux/slices/app';
import { faker } from '@faker-js/faker';


const Contact = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    return (
        <Box sx={{
            width: 320, height: "100vh",
            overflow:"hidden",

        }} p={0} m={0} >
            <Stack sx={{
                height: "100%",
            }} >
                <Box sx={
                    {
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        background: theme.palette.mode == "light" ? "#F8FAff" : theme.palette.background
                    }
                } >
                    <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} justifyContent={"space-between"} spacing={3}  >
                        <Typography variant='subtitle2' >Contact</Typography>
                        <IconButton onClick={() => dispatch(ToggleSideBar())} >
                            <X />
                        </IconButton>

                    </Stack>

                </Box>
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflow: "scroll" }} p={3} spacing={3} >
                    <Stack alignItems={"center"} direction="row" spacing={2} >
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5} >
                            <Typography variant='artical' >
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='artical' >
                                {'+9647737503949'}
                            </Typography>
                        </Stack>

                    </Stack>
                    <Stack direction={"row"} alignItems="center" justifyContent={"space-evenly"}  >
                        <Stack spacing={1} alignItems={"center"} >
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant='overline' > Video Call </Typography>
                        </Stack>
                        <Stack spacing={1} alignItems={"center"} >
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant='overline' > Voice Call </Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack spacing={0.5} >
                        <Typography> About  </Typography>
                        <Typography variant='body2' > hey I'm using this program  </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"}  >
                        <Typography variant='subtitle2' >Media , Links and Docs</Typography>

                        <Button endIcon={<CaretRight />} >
                            533
                        </Button>
                    </Stack>
                    <Stack sx={{
                        justifyContent: "space-evenly",
                        width: "100%",
                        height: "fit-content",
                    }} direction="row"  >
                        {[1, 2, 3].map(e => {
                            return <img src={faker.image.food()} style={{
                                margin: "0",
                                overflow: "hidden",
                                padding: "0"
                            }} width={"30%"} alt={faker.name.firstName()} />
                        })}

                    </Stack>
                    <Divider />

                    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} >
                        <Stack direction={"row"} alignItems={"center"} spacing={2} >
                            <Star size={21} />
                            <Typography variant='subtitle2' > Starred Message </Typography>
                        </Stack>
                        <IconButton>
                            <CaretRight/>
                        </IconButton>
                    </Stack>
                    <Divider/>
                    <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} >
                        <Stack direction={"row"} alignItems={"center"} spacing={2} >
                            <Bell size={21} />
                            <Typography variant='subtitle2' > Mute Notification </Typography>
                        </Stack>
                        
                      <Switch/>
                    </Stack>
                    <Divider/>
                    <Typography>1 Group in Commone</Typography>
                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
                        <Stack>
                            <Typography variant='subtitle2' >ijhwed ijew </Typography>
                            <Typography variant='caption' >iuwejfm eiwdjnfew djewd ewdin  </Typography>

                        </Stack>

                        </Stack>
                        <Stack direction={"row"} alignItems="center" spacing={2}>
                        <Button fullWidth variant='outlined' startIcon={<Prohibit/>} >
                            Block
                        </Button>
                        <Button fullWidth variant='outlined' startIcon={<Trash/>} >
                            Delete
                        </Button>
                        
                        </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Contact