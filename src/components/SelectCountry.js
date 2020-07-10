import React, { useEffect, useState } from 'react'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function SelectCountry(props) {

    let [countriesData, setCountriesData] = useState(0)
    let fetchResponse = null
    let [countriesLists, setCountries] = useState(0)
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
                fetchResponse = await fetch("https://corona.lmao.ninja/v2/countries/")
                setCountriesData(
                    countriesData = await fetchResponse.json()
                )
                setCountries(
                    countriesLists = countriesData.map(country => country.country)
                )
            }
            catch (error) {
                alert(error.message)
            }
        }
        getCountriesData()
    }, [getCountriesData])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">Select Country</InputLabel>
                <Select
                    native
                    value={value}
                    onChange={handleChange}
                    label="Select Country"
                >
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