import { Avatar, Box, Button, Divider, IconButton, InputBase, Typography, Badge } from "@mui/material"
import { borderRadius, margin, positions, Stack, width } from "@mui/system"
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react"
import { styled, alpha, useTheme } from "@mui/material/styles"
import { ChatList } from "../../data"
import { faker } from "@faker-js/faker";
import { SimpleBarStyle } from "../../components/Scrollbar"




const Search = styled("div")(({ theme }) => ({
    positions: "relative",
    borderRadius: "20",
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLift: 0,
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    padding: " 0% 5% 0% 5% "
}))

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

const ChatItem = ({ id,
    img,
    name,
    msg,
    time,
    unread,
    pinned,
    online, }) => {

    const theme = useTheme()
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: theme.palette.mode == "light" ? "#fff" : theme.palette.background.default

            }}
            p={2}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Stack direction="row" spacing={2}>
                    {online ? <StyledBadge overlap="circular" anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                        variant="dot"
                    >
                        <Avatar src={faker.image.avatar()} />
                    </StyledBadge> : <Avatar src={faker.image.avatar()} />}
                    <Stack>
                        <Typography variant="subtitle2">
                            {name}
                        </Typography>
                        <Typography variant="caption">
                            {msg}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center" >
                    <Typography variant="caption" sx={{
                        fontWeight: 600
                    }} >
                        {time}
                    </Typography>
                    <Badge color="primary" badgeContent={unread} />
                </Stack>
            </Stack>
        </Box>
    )
}

const SearchIconWrapper = styled('div')(({ theme }) => ({
    alignSelf: "center",
    height: "100%",
    display: "flex",
    pointerEvents: "none",

}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MultiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
        width: "100%"
    }
}))

const Chats = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            position: "relative",
            height: "100vh",

            width: 320,
            backgroundColor: theme.palette.mode == "light" ? "#F8FAFF" : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
        }}>
            <Stack p={3} spacing={2} sx={{ height: '100hv' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709ce6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." />
                    </Search>
                </Stack>
            </Stack>
            <Stack>


                <Button>
                    <Stack direction="row" alignItems="center"  >
                        <ArchiveBox size={24} />
                        archive
                    </Stack>
                </Button>
                <Divider />
                <Stack direction="column" padding={1} sx={{
                    overflowY: "hidden",
                    scrollbarColor: "red",
                    height: '82vh',
                    borderColor: "red",
                    flexGrow: 1

                }}>
                    <SimpleBarStyle timeout={10} clickOnTrack={false} sx={{
                        width: "100%",
                        height: "100%",
                        overflowY: "scroll",
                        paddingRight: "17px",/* Increase/decrease this value for cross-browser compatibility */
                        boxSizing: "content-box",
                    }} >
                        <Stack spacing={2.4}>
                            <Typography variant="subtitle2" color="#676767"  >
                                Pinned
                            </Typography>
                            {ChatList.filter((el) => el.pinned).map(e =>
                                <ChatItem {...e} />
                            )}


                            <Typography variant="subtitle2" color="#676767">
                                All Chat
                            </Typography>
                            {ChatList.filter((el) => !el.pinned).map(e =>
                                <ChatItem {...e} />
                            )}
                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Chats