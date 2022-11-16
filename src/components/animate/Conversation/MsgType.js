import { Divider, Typography, Stack, Box, useTheme, Link, IconButton, Menu, MenuItem } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react';
import { Message_options } from '../../../data';
import { useState } from 'react';

import React from 'react'

function MessageOptions(props) {
    const open = Boolean(props.anchorEl);
    const handleClick = (event) => {

        props.setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };
    const handleClose = () => {
        props.setAnchorEl(null);
    };
    return (
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {Message_options.map(e => {
                return <MenuItem onClick={handleClose}>{e.title}</MenuItem>
            })}
        </Menu>
    )
}




function DocMsg({ el }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = useTheme();

    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <div onContextMenu={(e) => {

                setAnchorEl(ee => e.target)
            }} >
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.mode == "light" ? "#fff" : theme.palette.background.paper
                            : theme.palette.primary.main,
                        borderRadius: 1.5, // 1.5 * 8 => 12 px
                        width: "max-content",
                        display: "gird",
                        justifyContent: "center"

                    }}>
                    <Stack spacing={2} >
                        <Stack p={2} spacing={3} direction={"row"} sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                            alignItems: "center"
                        }} >
                            <Image size={48} />
                            <Typography variant='caption' >
                                abstarct.png
                            </Typography>
                            <IconButton>
                                <DownloadSimple />
                            </IconButton>
                        </Stack>

                        <Typography sx={{
                            width: "100%",
                            display: "flex"
                            , justifyContent: "space-around"

                        }} >
                            {
                                el.message
                            }</Typography>
                    </Stack>
                </Box>
            </div>
            <MessageOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}


const LinkMsg = ({ el }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <div onContextMenu={(e) => {

                setAnchorEl(ee => e.target)
            }} > <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.mode == "light" ? "#fff" : theme.palette.background.paper
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.5 * 8 => 12 px
                    width: "max-content",
                }}>
                    <Stack spacing={2} >
                        <Stack spacing={3}

                            p={2}
                            alignItems="center"
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 1
                            }} >
                            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />


                        </Stack>
                        <Stack spacing={2} >
                            <Typography variant='subtitle2' >create Chat App</Typography>
                            <Typography variant='subtitle2' component={Link} to={"//www.youtube.com"} > www.youtube.com</Typography>
                        </Stack>
                        <Typography variant='subtitle2' >{el.message}</Typography>

                    </Stack></Box>
            </div>
            <MessageOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}


const ReplayMsg = ({ el }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);


    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <div onContextMenu={(e) => {

                setAnchorEl(ee => e.target)
            }} >
                <Box
                    p={1.5}
                    sx={{
                        backgroundColor: el.incoming
                            ? theme.palette.mode == "light" ? "#fff" : theme.palette.background.paper
                            : theme.palette.primary.main,
                        borderRadius: 1.5, // 1.5 * 8 => 12 px
                        width: "max-content",
                    }}>
                    <Stack spacing={2} >
                        <Stack spacing={3}
                            direction="column"
                            p={2}
                            alignItems="center"
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1
                            }} >
                            <Typography variant='body2' >
                                {el.message}
                            </Typography>


                        </Stack>
                        <Typography variant='body2' color={el.iconming ? theme.palette.text : "#fff"} >
                            {el.reply}
                        </Typography>
                    </Stack>
                </Box>
            </div>
            <MessageOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}



const MediaMsg = ({ el }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);


    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <div onContextMenu={(e) => {

                setAnchorEl(ee => e.target)
            }} >  <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.mode == "light" ? "#fff" : theme.palette.background.paper
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.5 * 8 => 12 px
                    width: "max-content",
                }}>
                    <Stack spacing={1} >
                        <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} ></img>
                        <Typography variant='body2'>
                            {el.message}
                        </Typography>
                    </Stack>
                </Box>
            </div>
            <MessageOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
}


const TextMsg = ({ el }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = useTheme();
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <div onContextMenu={(e) => {

                setAnchorEl(ee => e.target)
            }} > <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.mode == "light" ? "#fff" : theme.palette.background.paper
                        : theme.palette.primary.main,
                    borderRadius: 1.5, // 1.5 * 8 => 12 px
                    width: "max-content",
                }}>
                    <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.message}
                    </Typography>
                </Box>
            </div>
            <MessageOptions anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Stack>
    )
};

const TimeLine = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} alignItems="center" justifyContent={"space-between"} >
            <Divider width="46%" />
            <Typography variant='caption' sx={{
                color: theme.palette.text
            }} >
                {el.text}
            </Typography>
            <Divider width="46%" />


        </Stack>
    )
}

export {
    TimeLine,
    TextMsg,
    MediaMsg,
    ReplayMsg,
    LinkMsg,
    DocMsg,
    MessageOptions
}