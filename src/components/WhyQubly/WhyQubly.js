import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './WhyQubly.css'
import eye from '..//../img/Icon awesome-eye.svg'
import bar from '..//../img/chart-bar-33.svg'
import letter from '..//../img/newsletter-dev.svg'
import timeline from '..//../img/timeline.svg'
const WhyQubly = () => {
    return (
        <Box className="control-whyQubly">
            <Button>  <Box sx={{ paddingRight: '12px', paddingTop: '8px' }} ><img src={eye} /></Box > WhyQubly</Button>
            <Box className='control-text-qubly'>
                <Typography variant='h3' >Get actionable insights from Big Data in 3 steps</Typography>
                <Box sx={{ maxWidth: '672px', display: 'block', margin: '24px auto' }}>
                    <Typography variant='h4' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
                </Box>
                <Grid container paddingLeft={'16px'}>
                    <Grid item md={4} sm={4} xs={12} >
                    <Box className="item-text">
                        <img src={bar} />
                            <Typography variant='h4'>Valuable business insights</Typography>
                            <Typography variant='h5'>Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box className="item-text">
                            <img src={letter} />
                            <Typography variant='h4'>Powerful Algorithms</Typography>
                            <Typography variant='h5'>With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Box className="item-text">
                            <img src={timeline} />
                            <Typography variant='h4'>Data in real-time</Typography>
                            <Typography variant='h5'>Collect data in real-time from multiple channels and move it into a data lake, in its original format.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyQubly