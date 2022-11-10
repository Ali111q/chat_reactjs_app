import { Box, Button, IconButton, InputBase, Typography } from "@mui/material"
import { borderRadius, margin, positions, Stack, width } from "@mui/system"
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react"
import { styled, alpha } from "@mui/material/styles"


const Search = styled("div")(({ theme }) => ({
    positions: "relative",
    borderRadius: "20",
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLift: 0,
    width: "90%",
    display:"flex",
    justifyContent:"space-between",
    padding:" 0% 5% 0% 5% "
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    alignSelf:"center",
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
                <Stack sx={{width:"100%"}}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709ce6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..."/>
                    </Search>
                </Stack>
            </Stack>
            <Stack>
            <Stack direction="row" alignItems="center">
                <ArchiveBox size={24}/>
                <Button>
                    archive
                </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Chats