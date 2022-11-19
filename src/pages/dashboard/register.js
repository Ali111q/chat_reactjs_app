import { Grid } from "@mui/material"
import Register from "../../components/settings/RegisterForm"

function register() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Register/>
  </Grid>
  )
}

export default register