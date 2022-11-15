import { Box, IconButton, Stack, Divider, Avatar, Switch, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Nav_Buttons } from '../../data/index'
import React from 'react'
import useSettings from '../../hooks/useSettings'
import { useState } from "react";
import { Gear, Sidebar } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico"
import { faker } from "@faker-js/faker";
import { Profile_Menu } from "../../data/index";




export const SideBar = () => {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState(0)
    const {onToggleMode}= useSettings()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


  return (
    <Box alignItems={"center"} sx={{
        p: 2,
        backgroundColor: useTheme().palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: "100px"

      }} >
        <Stack direction="column" sx={{ height: "100%" }} justifyContent="space-between" alignItems={"center"} spacing={3}>
        <Stack alignItems="center" spacing={4}>  <Box sx={{
            m: 2,
            backgroundColor: useTheme().palette.primary.main,
            width: 64,
            height: 64,
            borderRadius: 1.5
          }}>
            <img src={Logo} alt="Chat App logo" />
          </Box>
          <Stack
            spacing={3}
            direction="column"
            alignItems="center"
            sx={{
              width: "max-content"
            }} >
            {
              Nav_Buttons.map((e) => {
                return e.index === selected ? <Box sx={{
                  p: 1,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5
                }}>
                  <IconButton key={e.index} sx={{
                    color: "#fff",
                    width: "max-content"
                  }
                  }>
                    {e.icon}
                  </IconButton  >
                </Box> : <IconButton onClick={() => {
                  setSelected(e.index)
                }} key={e.index} sx={{
                  color: theme.palette.mode==="light"? "#000":"#fff",
                  width: "max-content"
                }
                }>
                  {e.icon}
                </IconButton >

              })}
            <Divider sx={{ width: 48 }} />
            {selected === 3 ? <Box sx={{
              p: 1,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5
            }}>
              <IconButton sx={{
                color: "#fff",
                width: "max-content"
              }
              }>
                <Gear />
              </IconButton  >
            </Box> : <IconButton onClick={() => {
              setSelected(3)
            }}>
              <Gear />
            </IconButton>}

          </Stack>
          </Stack>
          <Stack alignItems="center">
            <Switch defaultChecked onChange={()=>{onToggleMode()}} />
            <div onContextMenu={(e) => {

setAnchorEl(ee => e.target)
}} >
          <Avatar id="basic-button" srcSet={faker.image.avatar()} />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
          
            {Profile_Menu.map(e => {
                return <MenuItem onClick={handleClose}>
                  <Stack sx={{
                    width:100,
                    

                  }} direction="row" alignItems={"center"} justifyContent="space-between" >
                  {e.icon}  <span> {e.title} </span>
                    
                  </Stack>

                </MenuItem>
            })}
        </Menu>
        </Stack>
        </Stack>

      </Box>
  )
}


export default SideBar