import React, { useState } from 'react'
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import Logo from '../../img/Logo.svg'
import { navbarData } from '../../mock/navbarData'
import './Hero.css'
import "@fontsource/metropolis";
import img1 from '../../img/image 1.png'
import Star from '../../img/edit-brightness.svg'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
const drawerWidth = 240;
const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} width='48px' height='48px' />
      </Typography>
      <Divider />
      <List>
        {navbarData.map((data) => {
          return (
            <Box sx={{ paddingLeft: '4px', paddingTop: '20px', textAlign: 'center' }}>
              <Typography sx={{
                fontFamily: 'metropolis', fontStyle: 'normal',
                fontWeight: 500, fontSize: '14px', cursor: 'pointer',
                color: '#000000'
              }} >
                {data.title}<img src={data.pic} /></Typography></Box>
          )
        })
        }
      </List>
    </Box>
  );
  return (
    <Box className='control-bg' sx={{ height: { md: '600px', sm: '696px', xs: '850px' } }}>
      <Container maxWidth="lg">
        <Box className='control-nav' sx={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', height: '53px', marginTop: '19px', maxWidth: '960px'
        }} >
          <Box sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' }, }}>
            <img src={Logo} width='48px' height='48px' />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }} >
            {
              navbarData.map((data) => {
                return (
                  <Typography sx={{
                    paddingRight: '52px', fontFamily: 'metropolis', fontStyle: 'normal',
                    fontWeight: 500, fontSize: '14px', cursor: 'pointer',
                    color: '#000000', lineHeight: "14px", display: { md: 'flex', sm: 'flex', xs: 'none' }
                  }}>{data.title}<Box sx={{ paddingLeft: '4px' }}><img src={data.pic} /></Box></Typography>
                )
              })
            }
            <Button sx={{ border: '1px solid #722ED1', textTransform: 'none', borderRadius: '23px', width: '142px', height: '38px', color: '#722ED1' }}>Start free trial</Button>
          </Box>
          <Box className="control-content-text" sx={{ position: 'absolute', top: { md: '168px', sm: '168px', xs: "100px" } }}>
            <Grid container spacing={2} >
              <Grid item md={7} sm={6} xs={12}>
                <Box>
                  <Button sx={{ fontFamily: 'metropolis', textTransform: 'none' }}>
                    <Box sx={{ paddingRight: '10px' }} ><img src={Star} /></Box>v3.1 released. <Typography className='line-bottom'>Learn more</Typography>
                  </Button>
                  <Typography sx={{
                    paddingTop: '24px', fontFamily: 'metropolis',
                    fontSize: '48px', lineHeight: '48px', fontWeight: 700
                  }}>Your data with <br></br>real-time analytics</Typography>
                  <Typography sx={{
                    paddingTop: '24px', fontFamily: 'metropolis',
                    fontSize: '16px', lineHeight: '24px', fontWeight: 500, opacity: 0.5
                  }}>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</Typography>
                  <Box className="btn-content">
                    <Button sx={{ fontFamily: 'metropolis', textTransform: 'none', width: '100%' }}>Start free trial</Button>
                    <Button sx={{ fontFamily: 'metropolis', textTransform: 'none', width: '100%' }}>Learn more</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={5} sm={6} xs={12}>
                <Box className="control-img-hero" sx={{ margin: { md: '-2rem 0' } }}>
                  <CardMedia component="img"
                    sx={{
                      width: { xs: '100%', md: 472, sm: '100%' },
                    }}
                    src={img1}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box >
          <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Container>
    </Box>
  )
}
export default Hero
