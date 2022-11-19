import { Box, Stack, Typography, Grid } from '@mui/material'
import React from 'react'
import LoginForm from '../../components/settings/LoginForm'


function login() {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
      
        <Grid item xs={3}>
      <LoginForm/>
        </Grid>   
         
      </Grid> 
    )
}

export default login