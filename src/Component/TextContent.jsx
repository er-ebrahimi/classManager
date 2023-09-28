import Box from "@mui/material/Box";
import styles from "./TextContentStyle.module.css";
import Grid from "@mui/material/Grid";

const TextContent = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.mainContent}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid sx={6} className={styles.ContentTextOne}>
            <h3 className={styles.H3Content}>Więcej niż korepetycje</h3>
            <p className={styles.PContent}>
              Szkolne metody sprawdzają się w nauczaniu grup, ale to nie znaczy,
              że będę one równie efektywne dla wszystkich uczniów potrzebujących
              pomocy w nauce. Właśnie dlatego wychodzimy z pomocną dłonią,
              przygotowując indywidualną ofertę zajęć specjalnie dopasowaną pod
              Twoje wyjątkowe potrzeby.
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TextContent;
