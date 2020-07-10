import React, { useEffect, useState } from 'react';
import { Cards, Chart } from './components';
import Countries from './components/CountryPicker/CountryPicker';
import styles from './Dashboard.module.css';
import { fetchSummaryData, fetchDataByCountry } from './api';
import Flag from './components/Flag/Flag';
//import CustomMarker from './components/MapsTracker/CustomMarker'

import MyFooter from './components/Footer/MyFooter'

const Dashboard = () => {
    const [isFetching, setFetching] = useState(false)
    const [data, setData] = useState([])
    const [country, setCountry] = useState('')
    //const [mapsCountry, setMapsCountry] = useState([])
    //const [countryStatsData, setcountryStatsData] = useState([])

    useEffect(() => {
        (async function () {
            setFetching(true)
            setData(await fetchSummaryData())
            //setMapsCountry(await fetchAllData())
            setFetching(false)
        })();
    }, [])

    const handleChangeCountry = async (selectedCountry) => {

        if (selectedCountry) {
            setData(await fetchDataByCountry(selectedCountry))
            setCountry(selectedCountry)
        } else {
            setData(await fetchSummaryData())
            setCountry('')
        }

    }

    /*
    const countryDataForMaps = countryLocation.map((data, idx) => {
      return (<div
        lat = {data.countryInfo.lat}
        lng = {data.countryInfo.long}
        style={{
          color: "red",
          backgroundColor: '#FFF',
          height: "25px",
          width: "35px",
        }}
        >
        {data.cases}
        </div>)
    })*/

    return (
        <div>
            <div className={styles.container}>
                <div  className={styles.box}>
                    {isFetching ? <div>Loading...</div> : <Cards summaryData={data} />}
                </div>
                <div className={`${styles.box} ${styles.stackTop}`}>
                    <Countries handleChangeCountry={handleChangeCountry} />
                </div>
                <div className={`${styles.box} ${styles.flag}`}>
                    {country ? <Flag flagURL={data.flag} /> : ''}
                </div>
            </div>

            <div className={styles.chartTopMargin}>
                <Chart data={data} country={country} />
                <br />
                <div>
                    <MyFooter />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;