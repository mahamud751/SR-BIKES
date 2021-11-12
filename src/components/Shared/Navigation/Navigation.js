import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SR BIKES
                    </Typography>
                    <NavLink to="/home">
                        <Button style={{ textDecoration: 'none', color: 'white' }}>Home</Button>
                    </NavLink>
                    <NavLink to="/explore">
                        <Button style={{ textDecoration: 'none', color: 'white' }}>Explore More</Button>
                    </NavLink>

                    {user?.email ?
                        <Box>
                            <NavLink to="/dashboard">
                                <Button style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Button>
                                <Button style={{ textDecoration: 'none', color: 'white' }}>{user.displayName}</Button>
                            </NavLink>
                            <Button style={{ textDecoration: "none", color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                        </Box>
                        :
                        <NavLink to="/login">
                            <Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                        </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;