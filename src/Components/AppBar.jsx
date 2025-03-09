import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsIcon from '@mui/icons-material/Settings';
import MentorshipMenu from './containerApp';
import { Button } from '@mui/material';



export default function ResponsiveAppBar() {
  const mentorshipMenuItems = [
    { label: "Programming Language", icon: <EditIcon /> },
    { label: "Computer Science", icon: <FileCopyIcon /> },
    { divider: true },
    { label: "Tools/Service", icon: <ArchiveIcon /> },
    { label: "More", icon: <MoreHorizIcon /> },
  ];

  const resourcesMenuItems = [
    { label: "JavaScript Basics", icon: <EditIcon /> },
    { label: "React Framework", icon: <FileCopyIcon /> },
    { divider: true },
    { label: "Advanced Topics", icon: <MoreHorizIcon /> },
  ];
  const expertHelpMenuItems = [
    { label: "Live Coding Help", icon: <SupportAgentIcon /> },
    { label: "Debugging Assistance", icon: <BuildIcon /> },
    { divider: true },
    { label: "Ask an Expert", icon: <HelpOutlineIcon /> },
  ];

  const moreMenuItems = [
    { label: "About Us", icon: <InfoIcon /> },
    { label: "Contact", icon: <ContactMailIcon /> },
    { divider: true },
    { label: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            Codementor
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <MentorshipMenu title="Mentorship" menuItems={mentorshipMenuItems} />
          <MentorshipMenu title="Resources" menuItems={resourcesMenuItems} />
          <MentorshipMenu title="Expert Help" menuItems={expertHelpMenuItems} />
          <MentorshipMenu title="More" menuItems={moreMenuItems} />
          <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
  <Button variant="text" sx={{ color: '#000000' }}>
    Become Mentor
  </Button>
  <Button variant="text" sx={{ color: '#000000' }}>
    Login
  </Button>
  <Button variant="contained" sx={{ backgroundColor: '#000000', color: 'white' }}>
    Sign Up
  </Button>
</Box>
   
          

          <AccountCircleIcon sx={{ display: { xs: 'flex', md: 'none' }, ml: 1, fontSize: 32 }} />
        </Toolbar>
      </Container>
   
    </AppBar>
  );
}
