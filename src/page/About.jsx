import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import logo from "../static/logo.png";
import profile from "../static/profile.png"
import Rectangle from "../static/Rectangle.png";
const boxStyle = {
  display: "flex",
  width: "700px",
  height: "400px",
  padding: "30px 40px",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
  backgroundColor: "red",
  borderRadius: "15px",
  background: "#FBFBFB",
  //   background: "red",
  maxWidth: "400px",
  mx: "auto",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.28)",
  mb: 4,
};

export default function About() {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url(${Rectangle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 50%",
          backgroundPosition: "center",
          boxShadow: "none",
        }}
      >
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  width: "46vw",
                  height: "70vh",
                  padding: "30px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                  //   flexShrink: 0,
                  //   backgroundColor: "red",
                  borderRadius: "15px",
                  mx: "auto",
                  mt: "100px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${logo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#fff",
                    backgroundPosition: "center",
                    boxShadow: "none",
                    height: "7rem",
                    width: "7rem",
                    mx: "auto",
                  }}
                ></Box>
                <Typography
                  variant="h2"
                  color="secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  Poznaj nasz zespół
                </Typography>
                <Typography
                  variant="p"
                  color="primary"
                  sx={{ textAlign: "center" }}
                >
                  Jesteśmy studentami, absolwentami i doktorantami, dla których
                  nadrzędnym celem jest podniesienie jakości nauczania. <br />
                  <br />
                  <span style={{ fontWeight: "" }}>
                    Co robimy poza zajęciami?
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={boxStyle}>
                  <Box
                  sx={{
                    backgroundImage: `url(${profile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#fff",
                    backgroundPosition: "center",
                    boxShadow: "none",
                    height: "7rem",
                    width: "7rem",
                    mx: "auto",
                    borderRadius:"10rem"
                  }}
                  >
                  </Box>
                  <Typography variant="p" color="initial" sx={{alignItems:"center" , fontWeight:"bold", p:3}}>Sara </Typography>
                  <Typography variant="p" color="initial" sx={{alignItems:"center"}}> Hello how are you </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={boxStyle}>
                  <Box
                  sx={{
                    backgroundImage: `url(${profile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#fff",
                    backgroundPosition: "center",
                    boxShadow: "none",
                    height: "7rem",
                    width: "7rem",
                    mx: "auto",
                    borderRadius:"10rem"
                  }}
                  >
                  </Box>
                  <Typography variant="p" color="initial" sx={{alignItems:"center" , fontWeight:"bold", p:3}}>Sara </Typography>
                  <Typography variant="p" color="initial" sx={{alignItems:"center"}}> Hello how are you </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={boxStyle}>
                  <Box
                  sx={{
                    backgroundImage: `url(${profile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#fff",
                    backgroundPosition: "center",
                    boxShadow: "none",
                    height: "7rem",
                    width: "7rem",
                    mx: "auto",
                    borderRadius:"10rem"
                  }}
                  >
                  </Box>
                  <Typography variant="p" color="initial" sx={{alignItems:"center" , fontWeight:"bold", p:3}}>Sara </Typography>
                  <Typography variant="p" color="initial" sx={{alignItems:"center"}}> Hello how are you </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
