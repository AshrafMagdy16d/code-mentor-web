import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import heroImage from "../images/hero-l.png";


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
                       Find a developer for<br/>
                       live programming help & freelance jobs
                    </Typography>
                    <Button 
                      variant="contained"
                    sx={{ backgroundColor: "#ed7700", color: "#ffffff" , width: "max-content",
 }}>
                    Get Help Now
                    </Button>
                    <img
                        style={{
                            width: "500px",
                            position: "absolute",
                            bottom: "-85px",
                        }}
                        src={heroImage}
                    ></img>
                </Box>
            
                    
  
  </>
  )
}
