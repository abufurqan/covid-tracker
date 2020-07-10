import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import logo from '././../images/covid19_logo.png'

function CirclesData(props) {

    let [infected, setInfected] = useState(0)
    let [recovered, setRecovered] = useState(0)
    let [deaths, setDeaths] = useState(0)
    let [formateDate, setFormateDate] = useState(null)

    useEffect(() => {  

        if(props.data !== null){ 
            
            // console.log(props.data)   

            setInfected(
                infected = props.data.confirmed.value
            )
            setRecovered(
                recovered = props.data.recovered.value
            )
            setDeaths(
                deaths = props.data.deaths.value
            )
            setFormateDate(
                formateDate = new Date(props.data.lastUpdate).toDateString()
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
    <div className={classes.root}>
        <Grid container spacing={3} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Grid item s={4}>
                <Card className={classes.infected}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Infected
                            </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp
                                start={0}
                                end={infected}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {showThisDate}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of active cases of COVID-19
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item s={4}>
                <Card className={classes.recovered}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Recovered
                            </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp
                                start={0}
                                end={recovered}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {showThisDate}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of active recoveries from COVID-19
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item s={4}>
                <Card className={classes.deaths}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Deaths
                            </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp
                                start={0}
                                end={deaths}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {showThisDate}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of deaths caused by COVID-19
                            </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        <div className={styles.circleContainer}>
                <div className={styles.deg1}>
                    <CardContent className={styles.CardContent}>
                        <Typography variant="h6" component="p">
                            Last Update<br />Sun Jul 05 2020
                        </Typography>
                        <Typography variant="h6" component="p">
                            Select Location
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <select name="countries" id="select-country">
                                <option value="">Worldwide</option>
                                <option value="">Pakisatn</option>
                            </select>
                        </Typography>
                    </CardContent>
                </div>
                <div className={styles.deg2}>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Infected
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp start={0} end="11343687" duration={2.1} separator="," />
                        </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp start={0} end="125150" duration={1} separator="," />
                        </Typography>
                    </CardContent>
                </div>
                <div className={styles.deg3}>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Active
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp start={0} end="4393114" duration={2.1} separator="," />
                        </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp start={0} end="161111" duration={1} separator="," />
                        </Typography>
                    </CardContent>
                </div>
                <div className={styles.deg4}>
                <img src={logo} alt="covid-19 logo" style={{
                    width: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto'

                }}/>
                </div>
                <div className={styles.deg5}>
                    <CardContent className={styles.CardContent}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Recovered
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp start={0} end="6421605" duration={2.1} separator="," />
                        </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp start={0} end="129082" duration={1} separator="," />
                        </Typography>
                        </CardContent>
                </div>
                <div className={styles.deg6}>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Deaths
                        </Typography>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <CountUp start={0} end="532405" duration={2.1} separator="," />
                        </Typography>
                            <Typography variant="h5">
                                Today
                        </Typography>
                            <Typography variant="h5" component="p">
                                <CountUp start={0} end="4033" duration={1} separator="," />
                        </Typography>
                    </CardContent>
                </div>
                <div className={styles.deg7}>
                    <CardContent>
                        <Typography variant="h5" className={styles.txtRecover}>
                            Recovery Rate
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom className={styles.txtRecover0}>
                            <CountUp start={0} end="54" duration={1.5} />%
                        </Typography>
                        <Typography variant="h5" className={styles.txtDeath}>
                            Death Rate
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom className={styles.txtDeath}>
                            <CountUp start={0} end="5" duration={1} />%
                        </Typography>
                    </CardContent>
                </div>
            </div>
            <div className={styles.graph}>
                <Grid container spacing={3} justify="center" >
                    <Grid item xs={6} md={6} className={styles.barGraph}>
                        <Paper>
                            <Typography variant="h4" component="h2" gutterBottom>
                                    Pakistan - Bar Chart
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} className={styles.timeGraph}>
                        <Paper>
                            <Typography variant="h4" component="h2" gutterBottom>
                                    Worldwide - Line Chart
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

    </div>
)
}

export default CirclesData;