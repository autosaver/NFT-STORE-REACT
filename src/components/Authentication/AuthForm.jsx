import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function AuthForm({setLogin}) {

    const [isSignup, setisSignup] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const user = {
            name: (data.get('firstName') + data.get('lastName')),
            email: data.get('email'),
            password: data.get('password'),
            passwordConfirm: data.get('passwordConfirm')
        }

        const response = await fetch('http://localhost:5000/user/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user,
            })
        });
        const resdata = await response.json();
        
        if(resdata.status){
            localStorage.setItem('token',resdata.token);
            setLogin(false);
        }
        else{
            alert(resdata.message);
            
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
            >
                <Typography component="h1" variant="h5"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px'
                    }}>
                    Sign {isSignup ? 'Up' : 'In'} <LockOutlinedIcon />
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        {isSignup && <><Grid item xs={12} sm={6}>
                            <TextField
                                inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus

                            />
                        </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    color='secondary'
                                />
                            </Grid>
                        </>}
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        { isSignup && <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="passwordConfirm"
                                label="Confirm Password"
                                type="password"
                                id="passwordConfirm"
                                autoComplete="new-password"
                            />
                        </Grid>}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign {isSignup ? 'Up' : 'In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <div onClick={() => setisSignup(!isSignup)} style={{ color: "whitesmoke", cursor: 'pointer' }}>
                                {isSignup ? 'Already' : "Don't"} have an account? Sign {isSignup ? 'In' : 'Up'}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    )
}

export default AuthForm