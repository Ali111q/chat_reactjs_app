import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User, } from "phosphor-react";
import { Box, Stack, Badge, IconButton, TextField, InputAdornment, useTheme, Fab, Tooltip, } from "@mui/material"
import StyledInput from "../../settings/StyledInput";
import { useState } from "react";
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'
import EmojiPicker from "emoji-picker-react";



const Actions = [
{
color: "#4da5fe",
icon: <Image size={24} />,
y: 102,
title: "Photo/Video",
},
{ 
color: "#1b8cfe",
icon: <Sticker size={24} />,
y: 172,
title: "Stickers",
},
{
color: "#0172e4",
icon: <Camera size={24} />,
y: 242,
title: "Image",
},
{
color: "#0159b2",
icon: <File size={24} />,
y: 312,
title: "Document",
},
{
    color:"#013f7f",
    icon: <User/>,
    y: 382,
title: "Contact"
}
]

// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//    console.log('done');
//     //
//   });

const ChatInput = (props) => {
    const [openActions, setOpenActions] = useState(false)


    return (
        <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
            disableUnderline: true,
            startAdornment:
            <Stack maxWidth={"max-content"}>
                <Stack sx={{
                    position:"relative",
                    display: openActions? "inline-block":"none"
                }} >
                    {Actions.map(e=>{
                        return <Tooltip placement="right" title={e.title}>
                        <Fab sx={{
                            position:"absolute",
                            top:-e.y,
                            backgroundColor:e.color 
                        }}  >
                            {e.icon}
                        </Fab>
                        </Tooltip>
                    })}

                </Stack>
            <InputAdornment>
                <IconButton>
                    <LinkSimple onClick={()=>{setOpenActions(e=>!e)}} />
                </IconButton>
            </InputAdornment>
            </Stack> ,
            endAdornment: <InputAdornment>
                <IconButton>
                    <Smiley onClick={()=>{
                        props.setOpenPicker(e=>!e)
                    }}  />
                </IconButton>
            </InputAdornment>,

        }} />
    );
}





const Footer = () => {
    const [openPicker, setOpenPicker] = useState(false)

    const theme = useTheme()
    return (
        <Box sx={{ height: 110, width: "100%", backgroundColor: theme.palette.mode == "light" ? "#f8faff" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }}>

            <Stack p={2} direction="row" alignItems="center" spacing={3} >

                <Stack width={"100%"} >
                    {openPicker&& <Box sx={{  zIndex: 10, position: " fixed", bottom: 81, right:100 }}>
                        <EmojiPicker theme={theme.palette.mode} onEmojiClick={e=>{console.log(e.emoji)}} />
                    </Box>}
                    <ChatInput setOpenPicker = {setOpenPicker} />
                </Stack>
                <IconButton>
                    <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }} alignItems="center" >
                        <Stack alignItems="center" justifyContent="center" width="100%" height="100%">
                            <PaperPlaneTilt color="#fff" />
                        </Stack>

                    </Box></IconButton>
            </Stack>

        </Box>
    )
}

export default Footer