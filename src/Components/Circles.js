
import React, { useState, useEffect } from 'react'

import { Grid, Typography, Paper } from '@material-ui/core';

import StatusCards from './StatusCards'
import SelectCountry from './SelectCountry';
import Graphs from './Graphs';

import styles from './Circles.module.css';


function Circles() {
    let [globalData, setGlobalData] = useState(null)
    let fetchResponse = null
    let [timer, setTimer] = useState(0)
    let [country, getCountry] = useState();
    let api = `https://corona.lmao.ninja/v2`

    setInterval(() => {
        setTimer(timer = timer + 1)
    }, 60000)

    if (!country || country === "global") {
        //api = `https://covid19.mathdro.id/api`
        api = 'https://corona.lmao.ninja/v2/all'
    }
    else {
        //api = `https://covid19.mathdro.id/api/countries/${country}`
        api = `https://corona.lmao.ninja/v2/countries/${country}`
    }

    useEffect(() => {

        const getGlobalData = async () => {

            try {
                fetchResponse = await fetch(api)
                setGlobalData(
                    globalData = await fetchResponse.json()
                )
                // console.log(globalData)
            }
            catch (error) {
                // console.log(error)
            }
        }
        getGlobalData()
    }, [timer, country])


    return (
        <div className={styles.dropDown}>
            <div>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <SelectCountry onChange={(value) => getCountry(country = value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <StatusCards data={globalData} />
                    </Grid>
                    <Grid item xs={5} className={styles.graph}>
                        <Typography variant="h6" component="h6" gutterBottom>
                            <p>Covid-19 {country} Historical Data</p>
                        </Typography>
                        <Graphs countryName={country} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Circles;