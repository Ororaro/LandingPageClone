import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './Testimonial.css'
import profile from '../../img/Profile.svg'
import Tonkean from '../../img/Tonkean.png'
import BigSpring from '../../img/BigSpring.png'
import Clearbit from '../../img/Clearbit.png'
import Mine from '../../img/Mine.png'
import Shake from '../../img/Shake.png'
const Testimonial = () => {
    return (
        <Box className="testimonial-bg" >
            <Box className="control-testimonial-text"
                sx={{ maxWidth: '960px', display: 'block', margin: '5rem auto' }}>
                <Typography variant='h1' sx={{ color: "#160637" }}>
                    "What I love about Qubly is the easy way we can collaborate even
                    if there is a lot of people involved in the process"
                </Typography>
                <Box className="control-img"
                    sx={{ textAlign: 'center', paddingTop: '32px' }} >
                    <img src={profile} />
                    <Box className="text-profile" >
                        <Typography variant='h5'>Guillaume Cabane CTO @ BigSpring</Typography>
                    </Box>
                </Box>
                <Box sx={{ borderTop: '1px solid #DEC9FA', marginTop: '32px', position: 'relative' }}>
                    <Grid container spacing={6} sx={{ paddingTop: "32px",textAlign:'center' }} alignItems={'center'}>
                        <Grid item md={2.4} sm={4} xs={4}>
                            <img src={Tonkean}  />
                        </Grid>
                        <Grid item md={2.4} sm={4} xs={4} >
                            <img src={BigSpring}  />
                        </Grid>
                        <Grid item md={2.4} sm={4} xs={4}>
                            <img src={Clearbit}  />
                        </Grid>
                        <Grid item md={2.4} sm={4} xs={4}>
                            <img src={Mine} />
                        </Grid>
                        <Grid item md={2.4} sm={4} xs={4}>
                            <img src={Shake}   />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box >
    )
}

export default Testimonial