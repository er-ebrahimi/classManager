import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Rectangle from "../static/RectangleContact.png";
import logo from "../static/logo.png";
import face from "../static/faceBook.svg";
import insta from "../static/instagram.svg";

export default function Contact() {
  const boxStyle = {
    px: 1,
    py: 3,
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      height="93vh"
      alignContent="center"
      sx={{
        backgroundImage: `url(${Rectangle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "110vw 70%",
        backgroundPosition: "bottom",
        boxShadow: "none",
        position: "relative",
        // m:0
      }}
    >
      <Grid
        item
        // bgcolor={"red"}
        justifyContent="center"
        xs={6}
        height="50vh"
        borderRadius="15px"
        sx={{ padding: "0px" }}
      >
        <Box sx={{ width: "inherit", height: "50%", borderRadius: "15px" }}>
          <Typography variant="h4" color="initial" textAlign="center">
            Masz więcej pytań?
          </Typography>
          <Typography variant="body1" color="initial" textAlign="center">
            Chętnie pomożemy! Zadzwoń lub napisz do nas!
          </Typography>
        </Box>
        {/* <Box
          sx={{
            bgcolor: "#FDFBFB",
            width: "inherit",
            height: "50%",
            borderRadius: "15px",
            display:"flex",
            justifyContent:"center",
            flexDirection:"row",
          }}
        ></Box> */}
        <Grid
          bgcolor="#FDFBFB"
          container
          borderRadius="15px"
          position="relative"
          zIndex="3"
        >
          <Grid sx={boxStyle} container xs={12} md={6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              style={{ margin: "auto" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5 27.0485L18.6296 23.0109L1.63764 40.4053H44.9305L28.2514 22.9815L23.5 27.0485ZM30.6822 21.1353L46.8414 37.9364C46.9339 37.6103 47 37.2725 47 36.9156V7.87544L30.6822 21.1353ZM0 7.80789V36.9156C0 37.2725 0.0660963 37.6103 0.158628 37.9364L16.3722 21.1897L0 7.80789ZM45.5312 5.14062H1.46875L23.5 22.7935L45.5312 5.14062Z"
                fill="#3A3A3A"
              />
            </svg>
            <Typography margin="auto" variant="body1" color="initial">
              biolmatwroc@gmail.com
            </Typography>
          </Grid>
          <Grid sx={boxStyle} container xs={12} md={6}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="44"
              viewBox="0 0 39 44"
              fill="none"
              style={{ margin: "auto" }}
            >
              <path
                d="M11.0725 1.546C11.0725 1.546 10.4184 0 9.41948 0C8.43641 0 7.92505 0.458 7.58414 0.774C7.24324 1.09 1.53901 5.82 1.53901 5.82C1.53901 5.82 -0.119928 7.282 0.00692059 10.032C0.113949 12.782 0.647109 16.696 3.41399 22.148C6.16106 27.588 13.0366 35.9 17.3812 38.822C17.3812 38.822 21.4067 41.938 25.1527 43.204C26.2408 43.55 28.417 44 28.9244 44C29.4398 44 30.3495 44 31.394 43.23C32.4564 42.452 38.4163 37.616 38.4163 37.616C38.4163 37.616 39.875 36.286 38.1804 34.74C36.4779 33.194 31.3088 29.756 30.2028 28.852C29.0949 27.934 27.5172 28.338 26.8354 28.96C26.1556 29.586 24.9406 30.616 24.7919 30.746C24.57 30.918 23.9615 31.476 23.2797 31.198C22.4116 30.852 18.8519 28.902 15.5518 24.346C12.2716 19.794 11.9109 18.306 11.4213 16.698C11.3383 16.4603 11.3371 16.2013 11.4181 15.9628C11.499 15.7244 11.6573 15.5204 11.8673 15.384C12.3588 15.04 14.1684 13.518 14.1684 13.518C14.1684 13.518 15.3397 12.352 14.8502 10.978C14.3606 9.604 11.0725 1.546 11.0725 1.546Z"
                fill="#3A3A3A"
              />
            </svg>
            <Typography
              variant="body1"
              color="initial"
              textAlign="center"
              margin="auto"
            >
              507 251 412
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          height: "200px",
          width: "150px",
          // bgcolor: "red",
          bottom: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            // backgroundColor: "#fff",
            // backgroundSize: "300px 100px",
            backgroundPosition: "center",
            boxShadow: "none",
            height: "7rem",
            width: "7rem",
            margin: "auto",
          }}
        ></Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
        >
          <Button
            sx={{
              backgroundImage: `url(${insta})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "#fff",
              // backgroundSize: "300px 100px",
              backgroundPosition: "center",
              boxShadow: "none",
              height: "3rem",
              width: "1rem",
              margin: "auto",
              bgcolor:"initial"
            }}
          ></Button>
          <Button
            sx={{
              backgroundImage: `url(${face})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "#fff",
              // backgroundSize: "300px 100px",
              backgroundPosition: "center",
              boxShadow: "none",
              height: "3rem",
              width: "1rem",
              margin: "auto",
              bgcolor:"initial"
            }}
          ></Button>
        </Box>
      </Box>
    </Grid>
  );
}
