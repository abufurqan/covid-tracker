//import React from 'react';
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';

//import StatusCards from './StatusCards'
import SelectCountry from './SelectCountry';



import { Grid } from '@material-ui/core';

//import styles from './Circles.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function DropDown() {
    const mainClass = useStyles();
    let [globalData, setGlobalData] = useState(null)
    let fetchResponse = null
    let [timer, setTimer] = useState(0)
    let [country, getCountry] = useState();
    let api = `https://corona.lmao.ninja/v2`



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
        getGlobalData(setGlobalData)
    }, [timer, country])

    //export default  function Circles() {

    return (
        <div className={mainClass.root}>
            <Grid container spacing={3} className={mainClass.rootGrid}>
                <Grid item xs={12}>
                    <SelectCountry onChange={(value) => getCountry(country = value)} />
                </Grid>
                {/*<Grid item xs={12} className={mainClass.selectGraph}>
                    <Graphs countryName={country} />
                </Grid>*/}
            </Grid>
        </div>
    );
}

export default DropDown;