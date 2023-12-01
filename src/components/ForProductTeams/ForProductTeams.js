import React from 'react'
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import './ForProductTeams.css'
import circuit from '../../img/electronic-circuit.svg'
import circle from '../../img/Group 21.png'
import pipeline from '../../img/image 6.png'
const ForProductTeams = () => {
    return (
        <Box className="control-product-teams" sx={{ marginTop: '120px',padding:'0 10px' }}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={6} xs={12} sx={{ textAlign: 'center' }}>
                    <CardMedia component="img"
                        sx={{
                            width: { sm: '100%', xs: '100%', md: 412.5 },
                        }}
                        src={circle}
                    />
                </Grid>
                <Grid item md={6} sm={6}xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Button>
                            <Box sx={{ paddingRight: '12px', paddingTop: '8px' }} >
                                <img src={circuit} width='100%' />
                            </Box >
                            For Product Teams
                        </Button>
                        <Box className="teams-text" >
                            <Typography variant='h3'>Launch with the best stack</Typography>
                            <Typography variant='h4'>A centralized platform that integrates zillions of data
                                sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ForProductTeams