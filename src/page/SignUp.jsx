import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../static/signup.png";
import logo from "../static/logo.png";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#fff",
            // backgroundSize: "300px 100px",
            backgroundPosition: "center",
            boxShadow: "none",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ boxShadow: "none" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#fff",
                // backgroundSize: "300px 100px",
                backgroundPosition: "center",
                boxShadow: "none",
                height: "7rem",
                width: "7rem",
              }}
            ></Box>
            <Typography component="h1" variant="h5">
              Utwórz konto
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M17 3.40527C9.49127 3.40527 3.40527 9.49127 3.40527 17C3.40527 24.5086 9.49127 30.5946 17 30.5946C24.5086 30.5946 30.5946 24.5086 30.5946 17C30.5946 9.49127 24.5086 3.40527 17 3.40527ZM17 4.5379C23.8711 4.5379 29.462 10.1277 29.462 17C29.462 20.0228 28.3793 22.798 26.5816 24.9581C25.3395 24.4396 22.406 23.4217 20.5912 22.8851C20.4361 22.8363 20.4116 22.8288 20.4116 22.1839C20.4116 21.6516 20.6305 21.1161 20.8441 20.6624C21.0757 20.1694 21.3498 19.3406 21.4486 18.5969C21.7238 18.2771 22.0989 17.646 22.3401 16.4443C22.5515 15.385 22.4527 14.9993 22.3125 14.638C22.2976 14.5998 22.2827 14.5626 22.271 14.5243C22.2179 14.2757 22.2912 12.9858 22.4718 11.9839C22.5972 11.2965 22.44 9.83552 21.4933 8.62746C20.8961 7.86352 19.7529 6.9264 17.6651 6.79571L16.5197 6.79677C14.467 6.9264 13.3237 7.86352 12.7266 8.62746C11.781 9.83552 11.6237 11.2975 11.7491 11.9839C11.9318 12.9858 12.003 14.2757 11.952 14.5201C11.9414 14.5626 11.9255 14.5998 11.9095 14.638C11.7703 15.0003 11.6705 15.385 11.883 16.4443C12.1231 17.646 12.4981 18.2771 12.7744 18.5969C12.8721 19.3406 13.1463 20.1694 13.379 20.6624C13.5479 21.0226 13.6276 21.5135 13.6276 22.2073C13.6276 22.8522 13.6031 22.8596 13.4586 22.9053C11.5812 23.46 8.59346 24.5395 7.4789 25.0271C5.64609 22.8575 4.5379 20.0557 4.5379 17C4.5379 10.1288 10.1277 4.5379 17 4.5379ZM8.29915 25.9101C9.57521 25.3895 12.1178 24.4821 13.7891 23.9891C14.7602 23.6831 14.7602 22.865 14.7602 22.2073C14.7602 21.6622 14.723 20.859 14.4043 20.18C14.1854 19.7146 13.9346 18.9167 13.8794 18.293C13.8677 18.1475 13.7986 18.0115 13.6881 17.9158C13.5277 17.7756 13.2015 17.2613 12.9933 16.2233C12.8286 15.402 12.8987 15.2224 12.9656 15.0481C12.9943 14.9738 13.022 14.9005 13.0443 14.8186C13.1803 14.3214 13.0283 12.6883 12.8636 11.782C12.7914 11.3878 12.8828 10.269 13.6191 9.32659C14.28 8.4819 15.2798 8.01121 16.5558 7.9294L17.63 7.92834C18.9401 8.01121 19.9399 8.4819 20.6018 9.32659C21.3392 10.269 21.4285 11.3878 21.3562 11.7831C21.1926 12.6883 21.0396 14.3225 21.1756 14.8186C21.199 14.9015 21.2255 14.9748 21.2542 15.0492C21.3222 15.2224 21.3913 15.403 21.2276 16.2243C21.0194 17.2624 20.6921 17.7766 20.5317 17.9169C20.4223 18.0136 20.3532 18.1485 20.3405 18.2941C20.2863 18.9188 20.0366 19.7157 19.8177 20.1811C19.567 20.7145 19.278 21.4253 19.278 22.185C19.278 22.8426 19.278 23.6608 20.2597 23.97C21.8588 24.4428 24.4141 25.3204 25.7635 25.8506C23.5099 28.0818 20.4138 29.4631 17 29.4631C13.618 29.4631 10.5474 28.1063 8.30021 25.9122L8.29915 25.9101Z"
                    fill="black"
                  />
                </svg>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{
                    ml: 1,
                    width: "40%",
                    minWidth: "320px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(126, 139, 182, 0.3);",
                        borderRadius: "15px",
                        "&:hover fieldset": {
                          borderColor: "green",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "green",
                        },
                      },
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M17 1.0625C12.898 1.0625 9.5625 4.39799 9.5625 8.5V13.8125H7.4375C7.15572 13.8125 6.88548 13.9245 6.68623 14.1237C6.48698 14.323 6.37503 14.5932 6.375 14.875V31.875C6.37503 32.1568 6.48698 32.427 6.68623 32.6263C6.88548 32.8255 7.15572 32.9375 7.4375 32.9375H26.5625C26.8443 32.9375 27.1145 32.8255 27.3138 32.6263C27.513 32.427 27.625 32.1568 27.625 31.875V14.875C27.625 14.5932 27.513 14.323 27.3138 14.1237C27.1145 13.9245 26.8443 13.8125 26.5625 13.8125H24.4375V8.5C24.4375 4.39799 21.102 1.0625 17 1.0625ZM17 3.1875C19.9615 3.1875 22.3125 5.53847 22.3125 8.5V13.8125H11.6875V8.5C11.6875 5.53847 14.0385 3.1875 17 3.1875ZM17 22.3685C17.1395 22.3685 17.2777 22.396 17.4066 22.4494C17.5355 22.5028 17.6526 22.5811 17.7513 22.6797C17.85 22.7784 17.9282 22.8955 17.9816 23.0244C18.035 23.1533 18.0625 23.2915 18.0625 23.431C18.0625 23.5706 18.035 23.7087 17.9816 23.8376C17.9282 23.9665 17.85 24.0837 17.7513 24.1823C17.6526 24.281 17.5355 24.3593 17.4066 24.4127C17.2777 24.466 17.1395 24.4935 17 24.4935C16.8605 24.4935 16.7223 24.466 16.5934 24.4127C16.4645 24.3593 16.3474 24.281 16.2487 24.1823C16.15 24.0837 16.0718 23.9665 16.0184 23.8376C15.965 23.7087 15.9375 23.5706 15.9375 23.431C15.9375 23.2915 15.965 23.1533 16.0184 23.0244C16.0718 22.8955 16.15 22.7784 16.2487 22.6797C16.3474 22.5811 16.4645 22.5028 16.5934 22.4494C16.7223 22.396 16.8605 22.3685 17 22.3685Z"
                    fill="#505050"
                  />
                </svg>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{
                    ml: 1,
                    width: "40%",
                    minWidth: "320px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(126, 139, 182, 0.3);",
                        borderRadius: "15px",
                        "&:hover fieldset": {
                          borderColor: "green",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "green",
                        },
                      },
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "431px",
                  height: "61px",
                  padding: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: 0,
                  borderRadius: "5px",
                  background: "rgba(38, 222, 79, 0.38)",
                }}
              >
                <Typography variant="p" color="initial">
                  asło powinno składać się z minimum 8 znaków, zawierać wielką
                  literę, cyfrę oraz znak specjalny
                </Typography>
              </Box>
              <Typography
                variant="p"
                color="initial"
                sx={{
                  display: "flex",
                  width: "365px",
                  height: "48px",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize:"10px",
                  mt:3
                }}
              >
                Rejestrując się, zgadzam się na Warunki użytkowania i potwierdzam zapoznanie się z Oświadczeniem dotyczącym prywatności.
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, backgroundColor: "#03A171" , "&:hover": {
                    backgroundColor: "#03c78b",
                  },}}
              >
               Utwórz konto
              </Button>
              <Grid container>
                <Grid item>
                {"Masz już konto?"}
                  <Link href="#" variant="body2">
                    {" Zaloguj się."}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
