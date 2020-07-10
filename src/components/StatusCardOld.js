import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

import styles from './Circles.module.css';

import logo from '././../images/covid19_logo.png'



function StatusCards(props) {

    let [infected, setInfected] = useState(0)
    let [todayCases, setTodayCases] = useState(0)
    let [active, setActive] = useState(0)
    let [critical, setCritical] = useState(0)
    let [recovered, setRecovered] = useState(0)
    let [todayRecovered, setTodayRecovered] = useState(0)
    let [recoveryRate, setRecoveryRate] = useState(0)
    let [deaths, setDeaths] = useState(0)
    let [todayDeaths, setTodayDeaths] = useState(0)
    let [deathRate, setDeathRate] = useState(0)
    let [formateDate, setFormateDate] = useState(null)

    useEffect(() => {

        if (props.data !== null) {

            console.log(props.data)

            setInfected(
                infected = props.data.cases
            )
            setTodayCases(
                todayCases = props.data.todayCases
            )
            setActive(
                active = props.data.active
            )
            setCritical(
                critical = props.data.critical
            )
            setRecovered(
                recovered = props.data.recovered
            )
            setTodayRecovered(
                todayRecovered = props.data.todayRecovered
            )
            setRecoveryRate(
                recoveryRate = props.data.recovered/props.data.cases*100
            )
            setDeaths(
                deaths = props.data.deaths
            )
            setTodayDeaths(
                todayDeaths = props.data.todayDeaths
            )
            setDeathRate(
                deathRate = props.data.deaths/props.data.cases*100
            )
            setFormateDate(
                formateDate = new Date(props.data.updated).toDateString()
            )
        }

    }, [props.data])


    let showThisDate = null
    if (formateDate == null) {
        showThisDate = "..."
    }
    else {
        showThisDate = formateDate
    }


    return (
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
                                Last Update<br />{showThisDate}
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
                                    end={infected}
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
                        <img src={logo} alt="covid-19 logo" style={{
                            width: 200,
                            marginLeft: 'auto',
                            marginRight: 'auto'

                        }} />
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
    )
}

export default StatusCards;