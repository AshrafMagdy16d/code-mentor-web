import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import heroImage from "../images/hero-l.png";
import mentorShip from "../images/mentorship.jpg";
import freelanceJob from "../images/freelance-job.png";
import visit from "../images/visit-arc (1).svg"

export default function OneBodySection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0b6685",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "300px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            color: "#ffffff",
            fontSize: "50px",
            textAlign: "center",
            marginBlock: "25px",
          }}
        >
          Find a developer for
          <br />
          live programming help & freelance jobs
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ed7700",
            color: "#ffffff",
            width: "max-content",
          }}
        >
          Get Help Now
        </Button>
        <img
          style={{
            width: "500px",
            position: "absolute",
            bottom: "-85px",
          }}
          src={heroImage}
          alt="Hero"
        />
      </Box>
      
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "100px" }}>
        <Typography variant="h1" sx={{ fontWeight: "700", color: "#0b6685", fontSize: "50px", textAlign: "center", marginBlock: "25px" }}>
          Get help from vetted software developers
        </Typography>

        <Box sx={{ width: "80%" }}>
          <Grid container spacing={4}>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <Typography variant="h3" sx={{ fontWeight: "700", color: "#0b6685" }}>
                One-on-one live programming help
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography sx={{ fontWeight: "400", color: "#0b6685" }}>
                  Debug with the help of an expert
                </Typography>
                <Typography sx={{ fontWeight: "400", color: "#0b6685" }}>
                  Personalize your learning experience
                </Typography>
                <Typography sx={{ fontWeight: "400", color: "#0b6685" }}>
                  Get answers to complex problems
                </Typography>
                <Button variant="contained" sx={{ width: "max-content", backgroundColor: "#e6850e" }}>
                  Find A Mentor
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img style={{ width: "500px" }} src={mentorShip} alt="Mentorship" />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={6}>
              <img style={{ width: "250px" }} src={freelanceJob} alt="Freelance Job" />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <Typography variant="h3" sx={{ fontWeight: "400", color: "#0b6685", fontSize: "24px" }}>
                Project-Based Freelance Work
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography sx={{ fontWeight: "400", color: "#0b6685", fontSize: "16px" }}>
                Find experts for on-demand code review!
                </Typography>
                <Typography sx={{ fontWeight: "400", color: "#0b6685", fontSize: "16px" }}>
                   Build features for your existing product!
                </Typography>
                <Typography sx={{ fontWeight: "400", color: "#0b6685", fontSize: "16px" }}>
                 Turn your ideas into an MVP!
                </Typography>
              </Box>
              <Button variant="contained" sx={{ width: "max-content", backgroundColor: "#e6850e" }}>
                Find A Freelancer
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "100px" }}>
      <Box sx={{ width: "80%" }}>
      <Grid container spacing={4}>
            <Grid item xs={6}>
              <img style={{ width: "250px" }} src={visit} alt="Freelance Job" />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <Typography variant="h3" sx={{ fontWeight: "400", color: "#0b6685", fontSize: "24px" }}>
           arc ()
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography sx={{ fontWeight: "400", color: "#0b6685", fontSize: "16px" }}>
                    Hiring for biggest project?
                </Typography>
                <Typography sx={{ fontWeight: "400", color: "#0b6685", fontSize: "16px" }}>
                Arc helps you find senior developers for both permanent full-time roles and 40+ hour contract projects.</Typography>
             
              </Box>
              <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "teal",
                                        fontSize: "16px",
                                    }}
                                >
                                    Visit Arc to learn more →
                                </Typography>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </>
  );
}
