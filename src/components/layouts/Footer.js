import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './Footer.css'
import Logo from '../../img/Logo.svg'
import { footerCompany, footerDeveloper, footerProduct, footerSupport } from '../../mock/footerData'
import fb from '../../img/facebook-icon.svg'
import ig from '../../img/instagram-2016.svg'
import twitter from '../../img/twitter-3.svg'
import TextField from '@mui/material/TextField';
import send from '../../img/Icon ionic-ios-send.svg'
import img7 from '../../img/image 7.svg'
const Footer = () => {
  return (
    <Box className="bg-footer" >
      <Box sx={{
        maxWidth: '960px',
        display: 'block', margin: '23px auto',
        padding: '0 10px'
      }}>
        <Grid container spacing={2}>
          <Grid item md={2.5} sm={12} xs={12} >
            <Box sx={{ marginTop: "58px", textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>
              <img src={Logo} />
              <Box className="control-text-col-1">
                <Typography variant='h4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat volutpat ut wisi enim ad minim</Typography>
                <Box className="control-social">
                  <img src={fb} alt='facebook' />
                  <img src={twitter} alt='twitter' />
                  <img src={ig} alt='instagram' />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={1.5} sm={3} xs={4}>
            <Box className='control-header-footer'>
              <Typography variant='h1'>Product</Typography>
              <Box className="control-sub-col2">
                {footerProduct.map((prd) => {
                  return <Typography variant='h5' sx={{ cursor: 'pointer' }}>{prd.title}</Typography>
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={2.1} sm={3} xs={4}>
            <Box className='control-header-footer'>
              <Typography variant='h1'>For Developers</Typography>
              <Box className="control-sub-col2">
                {footerDeveloper.map((prd) => {
                  return <Typography variant='h5' sx={{ cursor: 'pointer' }} >{prd.title}</Typography>
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={1.4} sm={3} xs={4}>
            <Box className='control-header-footer'>
              <Typography variant='h1'>Company</Typography>
              <Box className="control-sub-col2">
                {footerCompany.map((prd) => {
                  return <Typography variant='h5' sx={{ cursor: 'pointer' }}>{prd.title}</Typography>
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={1.5} sm={3} xs={4} >
            <Box className='control-header-footer'>
              <Typography variant='h1'>Support</Typography>
              <Box className="control-sub-col2">
                {footerSupport.map((prd) => {
                  return <Typography variant='h5' sx={{ cursor: 'pointer' }}>{prd.title}</Typography>
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={3.7} xs={6}>
            <Box className='control-header-footer'>
              <Typography variant='h1'>Newsletter</Typography>
              <Box className="newsletter">
                <TextField id="outlined-basic" label="Email" variant='outlined' sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#ffff" },
                  },
                }}
                  InputLabelProps={{ style: { fontSize: 12, lineHeight: '12px', fontWeight: 500, fontFamily: 'Metropolis', color: '#8989A2' } }} />
                <img src={send} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className="footer-text-final">
          <Typography variant='h2'>Rahul Rao</Typography>
          <img src={img7} />
        </Box>
      </Box>
    </Box>

  )
}

export default Footer