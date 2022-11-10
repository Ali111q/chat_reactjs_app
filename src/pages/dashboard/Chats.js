import { Avatar, Box, Button, Divider, IconButton, InputBase, Typography, Badge } from "@mui/material"
import { borderRadius, margin, positions, Stack, width } from "@mui/system"
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react"
import { styled, alpha } from "@mui/material/styles"
import { faker } from "@faker-js/faker";



const Search = styled("div")(({ theme }) => ({
    positions: "relative",
    borderRadius: "20",
    backgroundColor: alpha(theme.palette.background.paper, 1),
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

const ChatItem = () => {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#fff"

            }}
            p={2}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Stack direction="row" spacing={2}>
                    <StyledBadge overlap="circular" anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                        variant="dot"
                    >
                        <Avatar src={faker.image.avatar()} />
                    </StyledBadge>
                    <Stack>
                        <Typography variant="subtitle2">
                            David
                        </Typography>
                        <Typography variant="caption">
                            sended or recieved message
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center" >
                <Typography variant="caption" sx={{
                    fontWeight:600
                }} >
                            19:00
                        </Typography>
                        <Badge color="primary" badgeContent={2} />
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
    return (
        <Box sx={{
            position: "relative",
            height: "100rem",
            width: 320,
            background: "#F8FAFF",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
        }}>
            <Stack p={3} spacing={2}>
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
                <Stack direction="column" padding={1}>
                    <Stack spacing={2.4} >
                        <Typography variant="subtitle2" color="#676767">
                            Pinned
                        </Typography>
                    <ChatItem />
                    </Stack>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Chats