import styles from './Content.module.css'
import * as React from 'react';
import smile from '../assets/smile.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import zIndex from '@mui/material/styles/zIndex';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode ===  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    boxShadow : 'none'
  }));


  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    // border: 1,
    width: '3rem',
    height: '3rem',
    padding: '20px 23px',
    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius: '200px',
    background: 'var(--light-text-color, #FFF)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  };

const Content=()=>{
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6 } sx ={{zIndex:'2'}} className={styles.selGrid}>
                    <Item>
                        {/* <div className={styles.imageSmile}>
                        </div> */}
                    <img src={smile} alt="Logo" />
                    </Item>
                </Grid>
                <Grid item xs={6} className={styles.selGrid}>
                    <Item sx={{display :'flex'}} className={styles.gridRow}>
                        <div className={styles.recatngle}>

                        </div>
                        <Box sx={{ ...commonStyles, borderRadius: '50%' }} >
                            <h3 className={styles.textCircle}>
                                01
                            </h3>
                        </Box>
                        <div className={styles.gridTextBox}>
                            <p className={styles.featureTitle}>
                            Doświadczeni korepetytorzy
                            </p>
                            <p className={styles.featureDescription}>
                            Jesteśmy studentami, absolwentami i doktorantami
                            z prawie 10-letnim stażem nauczania.
                            </p>
                        </div>
                    </Item>
                    <Item sx={{display :'flex' }} className={styles.gridRow}>
                    <div className={styles.recatngle}>
                    </div>
                        <Box sx={{ ...commonStyles, borderRadius: '50%' }} >
                            <h3 className={styles.textCircle}>
                                02
                            </h3>
                        </Box>
                        <div className={styles.gridTextBox}>
                            <h3 className={styles.featureTitle}>
                            Zajęcia zdalne lub stacjonarne
                            </h3>
                            <p className={styles.featureDescription}>
                            Formę zajęć dopasujemy do Twoich potrzeb według naszych możliwości. Prowadzimy lekcje na platmofrmach online lub stacjonarnie w wybranych miastach.
                            </p>
                        </div>
                    </Item>
                    <Item sx={{display :'flex'}} className={styles.gridRow}>
                    <div className={styles.recatngle}>
                    </div>
                        <Box sx={{ ...commonStyles, borderRadius: '50%' }} >
                            <h3 className={styles.textCircle}>
                                03
                            </h3>
                        </Box>
                        <div className={styles.gridTextBox}>
                            <h3 className={styles.featureTitle}>
                            Szeroki wybór przedmiotów
                            </h3>
                            <p className={styles.featureDescription}>
                            Nasze szeregi zasilają nauczyciele z wielu dziedzin, zaczynając na językach obcych, kończąc na matematyce dyskretnej i biofizyce.
                            </p>
                        </div>
                    </Item>
                </Grid>
        </Grid>
    </Box>
        </>

    )
}

export default Content;