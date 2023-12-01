import React from 'react'
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import './ForEngineeringTeams.css'
import pipeline from '../../img/image 6.png'
import compass from '../../img/compass.svg'
const ForEngineeringTeams = () => {
    return (
        <Box className="control-product-teams" sx={{ marginTop: '120.5px',padding:'0 10px' }}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }} order={{ md: 1, xs: 2, sm: 1 }} >
                    <Box>
                        <Button>
                            <Box sx={{ paddingRight: '12px', paddingTop: '8px' }} >
                                <img src={compass} />
                            </Box >
                            For Engineering Teams
                        </Button>
                        <Box className="teams-text" >
                            <Typography variant='h3'> Data-driven pipelines in minutes</Typography>
                            <Typography variant='h4'>A centralized platform that integrates zillions of data
                                sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} sm={6}  xs={12} sx={{ textAlign: 'center' }} order={{ md: 2, xs: 1, sm: 2 }}>
                    <CardMedia component="img"
                        sx={{
                            width: { sm:'100%',xs: '100%', md: '684px' },
                        }}
                        src={pipeline}
                    /> 
                </Grid>

            </Grid>
        </Box>
    )
}

export default ForEngineeringTeams