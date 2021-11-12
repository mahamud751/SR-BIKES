import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
// import login from '../../../images/login.png'
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { registerUser, isLoading, user, authError } = useAuth()

    const handleOnBlur = e => {

        const filed = e.target.name
        const value = e.target.value
        const newValue = { ...loginData }
        newValue[filed] = value
        console.log(newValue)
        setLoginData(newValue)
        // console.log(filed, value)
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('sorry')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 2 }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            onBlur={handleOnBlur}
                            name="name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            onBlur={handleOnBlur}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />

                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                        <NavLink style={{
                            textDecoration: 'none'
                        }} to="/login"><Button variant="text">Already Register ?Please Login</Button></NavLink>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully Register</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <img style={{ width: '100%' }} src={login} alt="" /> */}
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;