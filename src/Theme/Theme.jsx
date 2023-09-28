import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Custom primary color
    },
    secondary: {
      main: "#03A171", // Custom secondary color
    },
    fontFamily: "Montserrat",
    components: {
      overrides: {
        MuiButton: {
          variants: [
            {
              props: { variant: "flat" },
              style: {
                borderWidth: 5,
                borderRadius: 5,
                borderStyle: "solid",
              },
            },
            {
              props: { variant: "flat", color: "secondary" },
              style: {
                borderColor: "red",
              },
            },
          ],
        },
      },
    },
  },
});
