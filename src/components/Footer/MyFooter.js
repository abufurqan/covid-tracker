import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import styles from './MyFooter.module.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link href="https://github.com/abufurqan/covid-tracker">
        View on Github
      </Link> {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[1000],
  },
}));

const MyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer>
      <Grid container spacing={3} justify="center" >
        <Grid item xs={12} md={8} >
          <Card className={styles.card}>
          <Copyright />
          </Card>
        </Grid>
      </Grid>
      </footer>
    </div>
  );
}

export default MyFooter;