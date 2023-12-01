import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './SignupForm.css'
import accenture from '../../img/accenture-4.svg'
import react from '../../img/react.svg'
import airbnb from '../../img/airbnb.svg'
import sky from '../../img/sky-4.svg'
import TextField from '@mui/material/TextField';
import btn_google from '../../img/btn_google_signin_dark_normal_web@2x.png'
const SignupForm = () => {
    return (
        <Box sx={{ marginTop: "167px",padding:{md:'0 0',sm:'0 10px',xs:'0 0'} }}>
            <Grid container spacing={2} >
                <Grid item md={6} sm={6} xs={12}  >
                    <Box className="control-text-signform" sx={{
                        display: { md: 'block', sm: 'block', xs: 'block' },
                        margin: { md: '0', sm: "0", xs: "0 auto" }
                    }}>
                        <Typography variant='h2'> See why the world’s best companies use Qubly to become truly data-driven.</Typography>
                        <Box className='control-trust-by'>
                            <Typography variant='h5'>Trusted by</Typography>
                        </Box>
                        <Grid container spacing={2} sx={{ marginTop: "52.7px" }} >
                            <Grid item md={6} sm={6} xs={6}>
                                <img src={accenture} />
                            </Grid>
                            <Grid item md={6} sm={6} xs={6} textAlign={'center'} >
                                <img src={react} />
                            </Grid>
                            <Grid item md={6} sm={6} xs={6} marginTop={'70px'}>
                                <img src={airbnb} />
                            </Grid>
                            <Grid item md={6} sm={6} xs={6} textAlign={'center'} marginTop={'70px'}>
                                <img src={sky} />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Box className='card-bg' sx={{ marginTop: { md: '0', sm: '0', xs: '24rem' }, maxWidth: { md: "480px", sm: "100%", xs: "100%" } }}>
                        <Box className='card-form' sx={{ width: { md: "428px", sm: "100%", xs: "100%" }, marginLeft: { md: "26px", sm: '0', xs: '0' } }}>
                            <Typography variant='h2' >Sign Up</Typography>
                            <Button>Start your free trial</Button>
                            <Box sx={{ paddingTop: '16px' }}>
                                <TextField id="outlined-basic" label="Your primary email" variant="outlined"
                                    InputLabelProps={{ style: { fontSize: 16, lineHeight: '16px', fontFamily: 'Metropolis', color: '#8989A2' } }} />
                            </Box>
                            <Box sx={{ paddingTop: '16px' }}>
                                <TextField type='password' id="outlined-basic" label="Password" variant="outlined"
                                    InputLabelProps={{ style: { fontSize: 16, lineHeight: '16px', fontFamily: 'Metropolis', color: '#8989A2' } }} />
                            </Box>
                            <Box sx={{ paddingTop: '16px' }}>
                                <TextField type='password' id="outlined-basic" label="Re-type Password" variant="outlined"
                                    InputLabelProps={{ style: { fontSize: 16, lineHeight: '16px', fontFamily: 'Metropolis', color: '#8989A2' } }} />
                            </Box>
                            <Box sx={{ paddingTop: '16px' }} className="control-text-or">
                                <Typography variant='h4'>OR</Typography>
                            </Box>
                            <Box className='btn-google' >
                                <img src={btn_google} />
                            </Box>
                            <Box className="control-check-account">
                                <Typography variant='h5'>Already have an account? <span style={{ color: '#722ED1', cursor: 'pointer' }}>Login</span></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignupForm