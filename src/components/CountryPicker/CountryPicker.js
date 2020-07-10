import React, { useEffect, useState } from 'react'
import { FormControl, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css';

const Countries = ({handleChangeCountry}) => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesFromAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchCountriesFromAPI();


  }, [])

  return (
    <div className={styles.container}>
    <Grid container spacing={3} justify="center"  >
      <FormControl >
        <Autocomplete
          className={styles.formAutocomplete}
          id="country-selection"
          onChange={(event, value) => handleChangeCountry(value)}
          options={countries}
          getOptionLabel={(countries) => countries}
          renderInput={(countries) => <TextField {...countries} label="Select Country" variant="outlined" />}
        />
      </FormControl>
    </Grid>
    </div>
  )
}

export default Countries;