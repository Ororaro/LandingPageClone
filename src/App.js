import Hero from "./components/Hero/Hero";
import './App.css'
import { Box, Container } from '@mui/material'
import WhyQubly from "./components/WhyQubly/WhyQubly";
import ForProductTeams from "./components/ForProductTeams/ForProductTeams";
import ForEngineeringTeams from "./components/ForEngineeringTeams/ForEngineeringTeams";
import Testimonial from "./components/Testimonial/Testimonial";
import SignupForm from "./components/SignupForm/SignupForm";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <Box>
      <Hero />
      <Box sx={{ maxWidth: '960px', display: 'block', margin: '5rem auto' }}>
        <WhyQubly />
        <ForProductTeams />
        <ForEngineeringTeams />
      </Box>
      <Testimonial />
      <Box sx={{ maxWidth: '960px', display: 'block', margin: '5rem auto' }}>
        <SignupForm />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
