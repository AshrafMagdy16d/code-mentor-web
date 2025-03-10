import { Box, Button, Grid, Typography, Card, CardContent, Avatar } from "@mui/material";
import React from "react";

const developers = [
  { name: "Jessamyn Smith", role: "Experienced Full-Stack Web Developer", image: "https://via.placeholder.com/80" },
  { name: "Daniel Hamilton", role: "Senior Software Engineer @ Indeed", image: "https://via.placeholder.com/80" },
  { name: "Martijn Pieters", role: "#1 Stack Overflow Python Answerer", image: "https://via.placeholder.com/80" },
  { name: "Ionică Bizău", role: "Full-Stack Developer", image: "https://via.placeholder.com/80" },
  { name: "Miroslav Kuták", role: "Senior iOS Developer", image: "https://via.placeholder.com/80" },
  { name: "Ben Gottlieb", role: "Senior iOS Developer and Consultant", image: "https://via.placeholder.com/80" },
];

export default function Cards() {
  return (
    <Box sx={{ backgroundColor: "#003c4f", color: "#ffffff", textAlign: "center", py: 6 }}>
      <Typography variant="h4" fontWeight={700}>
        Connect with
      </Typography>
      <Typography variant="h3" fontWeight={700} sx={{ mb: 4 }}>
        12000+ top developers anytime
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {developers.map((dev, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: 2 }}>
              <Avatar src={dev.image} sx={{ width: 56, height: 56, mr: 2 }} />
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="text.primary">
                  {dev.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dev.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
        Start working with our developers
      </Typography>
      <Button variant="contained" sx={{ mt: 2, backgroundColor: "#e74c3c" }}>
        GET STARTED
      </Button>
    </Box>
  );
}
