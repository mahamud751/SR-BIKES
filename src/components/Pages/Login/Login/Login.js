import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, isLoading, user, authError, signWithGoogle } = useAuth()
    console.log(user)

    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {

        const filed = e.target.name
        const value = e.target.value
        const newValue = { ...loginData }
        newValue[filed] = value
        setLoginData(newValue)

    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogle = () => {

        signWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 2 }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            onChange={handleOnChange}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            variant="standard" />

                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                        <NavLink style={{
                            textDecoration: 'none'
                        }} to="/register"><Button variant="text">New User? Please Register First</Button></NavLink>

                    </form>
                    <p>---------------------------------------</p>
                    <Button onClick={handleGoogle} sx={{ width: '75%', m: 1 }} variant="contained">Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Login</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;