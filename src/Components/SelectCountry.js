import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { red, blue } from '@material-ui/core/colors';
//import Graphs from './Graphs';


const useStyles = makeStyles((theme) => ({
    /*
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 150,
        width: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    */
}));


function SelectCountry(props) {

    const classes = useStyles();

    let [countriesData, setCountriesData] = useState(null)
    let fetchResponse = null
    let [countriesLists, setCountries] = useState(null)
    let [value, setValue] = useState("")


    const handleChange = (event) => {
        setValue(
            value = event.target.value
        );
        props.onChange(value)
    };

    useEffect(() => {
        const getCountriesData = async () => {
            try {
                //fetchResponse = await fetch("https://covid19.mathdro.id/api/countries")
                fetchResponse = await fetch("https://covid19.mathdro.id/api/countries")
                setCountriesData(
                    countriesData = await fetchResponse.json()
                )
                setCountries(
                    countriesLists = countriesData.countries.map(country => country.name)
                )
            }
            catch (error) {
                alert(error.message)
            }
        }
        getCountriesData()
    }, [])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Select Country</InputLabel>
                <Select
                    native
                    value={value}
                    onChange={handleChange}
                    label="Select Country"
                >
                    <option aria-label="None" value="" />
                    <option key="global" value="global">Global</option>
                    {!countriesLists ? [] : countriesLists.map(country => (
                        <option
                            key={country}
                            value={country}>
                            {country}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div >
    )
}

export default SelectCountry;