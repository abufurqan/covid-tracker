import React, { useState, useEffect } from 'react'
import { Grid, Card } from '@material-ui/core';
import { fetchDailyData } from '../../api';
import { Bar, Line } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { Typography } from '@material-ui/core';

const Chart = (props) => {

  const { confirmed, recovered, deaths } = props.data

  //const summaryData = props.data

  const [dailyStatisticsData, setdailyStatisticsData] = useState({})

  useEffect(() => {
    const fetchDailyDataFromAPI = async () => {
      const initialDailyData = await fetchDailyData()
      setdailyStatisticsData(initialDailyData)
    }

    fetchDailyDataFromAPI()
  }, [])

  //console.log(`${country} from props from state`);
  //console.log("Data for charts data")
  //console.log(dailyStatisticsData)

  const lineChart = (
    dailyStatisticsData[0] ? (
      <Line
        data={{
          labels: dailyStatisticsData.map(({ date }) => date),
          datasets: [{
            data: dailyStatisticsData.map((data) => data.confirmed),
            label: 'Infected Cases',
            borderColor: '#3232FA',
            fill: true
          }, {
            data: dailyStatisticsData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(240, 26,26 0.8)',
            fill: true,
          },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: false, text: `World Stats` },
        }}
      />
    ) : null
  );


  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(50, 50, 250, 0.8)', 'rgba(80, 250, 50, 0.8)', 'rgba(240, 26, 26, 0.8)'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: false, text: `Infected, Recovered & Deaths` },
        }}
      />
    ) : null
  );

  return (
    <div className={styles.gridContainer}>
      <Grid container spacing={3} justify="center" >
        <Grid item xs={6} md={6} >
          <Card>
            <Typography variant="h5" component="h5" align="center"> Infected, Recovered & Deaths </Typography>
            {barChart}
          </Card>
        </Grid>
        <Grid item xs={6} md={6} >
          <Card>
            <Typography variant="h5" component="h5" align="center"> Worldwide Daily Statistics </Typography>
            {lineChart}
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Chart