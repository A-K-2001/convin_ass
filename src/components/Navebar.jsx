import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from './Card.styled';
import { Link } from 'react-router-dom';

export const Navebar = () => {
    return (
        <Box  sx={{ flexGrow: 1  }}>
            <AppBar style={{backgroundColor:"white"}} position="static">
                <Toolbar>
                <Link to ="/">
                <Button style={{margin:"1rem"}}>Home</Button>
                </Link>
                <Link to ="/history">
                <Button style={{margin:"0rem"}} >History</Button>
                </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
