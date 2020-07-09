import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


function Graphs(props) {

    const classes = useStyles()

    let [country, setCountry] = useState()
    let [timer, setTimer] = useState(0)
    let [useThisAPI, setThisAPI] = useState()
    let [graphData, setGraphData] = useState([])
    let [fetchResponse, setFetchResponse] = useState()
    let initialState = {
        confirmed: "",
        recovered: "",
        deaths: "",
        date: ""
    }
    let [globalGraph, setGlobalGraph] = useState(initialState)
    let [countryGraph, setCountryGraph] = useState(initialState)
    let [makeGraph, setMakeGraph] = useState(false)
    let [lineChart, setLineChart] = useState()

    setInterval(() => {
        setTimer(timer = timer + 1)
    }, 60000)

    useEffect(() => {

        if (!props.countryName || props.countryName === "global") {
            setCountry(country = "global")
            setThisAPI(useThisAPI = `https://covid19.mathdro.id/api/daily`)
        }
        else {
            setCountry(country = props.countryName)
            setThisAPI(useThisAPI = `https://api.covid19api.com/total/country/${country}`)
        }

        const getGraphData = async () => {

            setFetchResponse(fetchResponse = await fetch(useThisAPI))
            setGraphData(graphData = await fetchResponse.json())

            if (country === 'global') {
                setMakeGraph(makeGraph = true)

                setGlobalGraph(
                    globalGraph.confirmed = graphData.map(obj => obj.confirmed.total),
                    globalGraph.recovered = graphData.map(obj => obj.recovered.total),
                    globalGraph.deaths = graphData.map(obj => obj.deaths.total),
                    globalGraph.date = graphData.map(obj => new Date(obj.reportDate).toDateString())
                )
                setLineChart(
                    lineChart = (
                        makeGraph ? (
                            <Line
                                data={{
                                    labels: globalGraph.date,
                                    datasets: [{
                                        label: 'Infected',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: '#8e44ad',
                                        borderColor: 'rgba(128, 0, 128,1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: '#8e44ad',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: '#8e44ad',
                                        pointHoverBorderColor: '#8e44ad',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: globalGraph.confirmed
                                    },
                                    {
                                        label: 'Recovered',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: '#27ae60',
                                        borderColor: '#27ae60',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: '#27ae60',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: '#27ae60',
                                        pointHoverBorderColor: '#27ae60',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: globalGraph.recovered
                                    },
                                    {
                                        label: 'Deaths',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: '#ef476f',
                                        borderColor: '#ef476f',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: '#ef476f',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: '#ef476f',
                                        pointHoverBorderColor: '#ef476f',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: globalGraph.deaths
                                    }],
                                }}
                            />
                        ) : (
                                <div className={classes.root}>
                                    <CircularProgress />
                                </div>)
                    )
                )
            }
            if (country !== 'global') {
                setMakeGraph(makeGraph = true)

                setCountryGraph(
                    countryGraph.confirmed = graphData.map(obj => obj.Confirmed),
                    countryGraph.recovered = graphData.map(obj => obj.Recovered),
                    countryGraph.deaths = graphData.map(obj => obj.Deaths),
                    countryGraph.date = graphData.map(obj => new Date(obj.Date).toDateString())
                )
                setLineChart(
                    lineChart = (
                        makeGraph ? (
                            <Line
                                options={{maintainAspectRatio: false},{responsive: true}}
                                data={{
                                    labels: countryGraph.date,
                                    datasets: [{
                                        label: 'Infected',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'rgba(128, 0, 128,0.4)',
                                        borderColor: 'rgba(128, 0, 128,1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(128, 0, 128,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(128, 0, 128,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: countryGraph.confirmed
                                    },
                                    {
                                        label: 'Recovered',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'rgba(0,128,0,0.4)',
                                        borderColor: 'rgba(0,128,0,1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(0,128,0,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(0,128,0,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: countryGraph.recovered
                                    },
                                    {
                                        label: 'Deaths',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'rgba(255, 0, 0,0.4)',
                                        borderColor: 'rgba(255, 0, 0,1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(255, 0, 0,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(255, 0, 0,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: countryGraph.deaths
                                    }],
                                }}
                            />
                        ) : (
                                <div className={classes.root}>
                                    <CircularProgress />
                                </div>)
                    )
                )
            }
            // console.log(country, useThisAPI, graphData, globalGraph, countryGraph)

            //reset the state
            setGraphData(graphData = [])
            setGlobalGraph(globalGraph = {})
            setCountryGraph(countryGraph = {})
            setMakeGraph(makeGraph = false)
        }
        getGraphData()
    }, [props.countryName, timer])

    return (
        <div style={{ padding: 20 }}>
            {lineChart}
        </div>
    )
}

export default Graphs