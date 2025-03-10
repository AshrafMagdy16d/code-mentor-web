import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#111", color: "white", py: 5, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Products Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>PRODUCTS</Typography>
          <Typography><strong>Codementor</strong> - Find a mentor to help you in real time</Typography>
          <Typography><strong>Codementor Events</strong> - Attend and host virtual events for developers</Typography>
          <Typography><strong>DevProjects</strong> - Learn programming by building projects</Typography>
          <Typography><strong>Arc</strong> - Helping employers find talent for remote jobs</Typography>
        </Grid>
        
        {/* Pages Section */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>PAGES</Typography>
          <Typography>Become a Codementor</Typography>
          <Typography>How It Works</Typography>
          <Typography>Find Mentors</Typography>
          <Typography>Find Freelancers</Typography>
          <Typography>Find a Tutor</Typography>
        </Grid>
        
        {/* Additional Links */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Community</Typography>
          <Typography>Blog</Typography>
          <Typography>Codementor For Students</Typography>
          <Typography>Codementor For Teams</Typography>
          <Typography>Code Review</Typography>
        </Grid>
        
        {/* More Pages */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>More</Typography>
          <Typography>Pair Programming</Typography>
          <Typography>Best Web Design Software</Typography>
          <Typography>Coding Starter Kit</Typography>
          <Typography>Codementor Reviews</Typography>
          <Typography>Best Language to Learn</Typography>
        </Grid>
      </Grid>
      
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography>© Copyright 2024 Codementor</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
          <Link href="#" color="inherit"><Facebook /></Link>
          <Link href="#" color="inherit"><Twitter /></Link>
          <Link href="#" color="inherit"><LinkedIn /></Link>
        </Box>
      </Box>
    </Box>
  );
}
