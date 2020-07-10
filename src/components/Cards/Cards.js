import React from 'react'

import { CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import logo from './../../images/covid19_logo.png';

const Cards = ({summaryData}) => {

  const { confirmed, todayCases, recovered, todayRecovered, deaths, todayDeaths, active, critical, lastUpdate } = summaryData;

  if (!confirmed) {
    return 'Loading...';
  }

  let recoveryRate = [(recovered / confirmed)*100];
  let deathRate = [(deaths / confirmed)*100];

  return (

    <div>
        <div>
            <Grid container spacing={3} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <div className={styles.circleUp}>
                <div className={styles.circleContainer}>
                    <div className={styles.deg1}>
                        <CardContent className={styles.CardContent}>
                            <Typography variant="h6" component="p">
                            Last Updated <br />
                            { new Date(lastUpdate).toDateString() }
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={styles.deg2}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Infected
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp
                                    start={0}
                                    end={confirmed}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp
                                    start={0}
                                    end={todayCases}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={styles.deg3}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Active
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp
                                    start={0}
                                    end={active}
                                    duration={2}
                                    separator=","
                                />
                            </Typography>
                            <Typography variant="h5">
                                Critical
                            </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp
                                    start={0}
                                    end={critical}
                                    duration={1}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={styles.deg4}>
                        <img className={styles.logo} src={logo} alt="COVID-19" />
                    </div>
                    <div className={styles.deg5}>
                        <CardContent className={styles.CardContent}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Recovered
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp
                                    start={0}
                                    end={todayRecovered}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={styles.deg6}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Deaths
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp
                                    start={0}
                                    end={deaths}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp
                                    start={0}
                                    end={todayDeaths}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={styles.deg7}>
                        <CardContent>
                            <Typography variant="h5" className={styles.txtRecover}>
                                Recovery Rate
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom className={styles.txtRecover0}>
                                <CountUp
                                    start={0}
                                    end={recoveryRate}
                                    duration={2}
                                    separator=","
                                />&#37;
                        </Typography>
                            <Typography variant="h5" className={styles.txtDeath}>
                                Death Rate
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom className={styles.txtDeath}>
                                <CountUp
                                    start={0}
                                    end={deathRate}
                                    duration={1.5}
                                    separator=","
                                />&#37;
                        </Typography>
                        </CardContent>
                    </div>
                </div>
                </div>
            </Grid>
            </div>
            </div>

)

}

export default Cards;