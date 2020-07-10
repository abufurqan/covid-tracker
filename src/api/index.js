import axios from 'axios'

const baseURL = 'https://covid19.mathdro.id/api'


const countriesStatsAPI = 'https://corona.lmao.ninja/v2/countries'

const baseURL2 = 'https://corona.lmao.ninja/v2'

export const fetchSummaryData = async () => {
  try {
    const summaryURL = `${baseURL2}/all`

    const { data: { cases, todayCases, recovered, todayRecovered, active, critical, deaths, todayDeaths, updated, affectedCountries } } = await axios.get(summaryURL)

    const summaryData = { confirmed: cases,
                          todayCases: todayCases,
                          recovered: recovered,
                          todayRecovered: todayRecovered,
                          active: active,
                          critical: critical,
                          deaths: deaths,
                          todayDeaths,
                          affectedCountries: affectedCountries,
                          lastUpdate: updated }

    return summaryData
  } catch (error) {
    return error;
  }
}

export const fetchDataByCountry = async (country) => {

  let countryURL = `${baseURL2}/countries/${country}`;

  try {
    const { data: { cases, todayCases, recovered, todayRecovered, active, critical, deaths, todayDeaths, updated, countryInfo } } = await axios.get(countryURL)

    const summaryData = {
      confirmed: cases,
      todayCases: todayCases,
      recovered: recovered,
      todayRecovered: todayRecovered,
      active: active,
      critical: critical,
      deaths: deaths,
      todayDeaths: todayDeaths,
      flag: countryInfo.flag,
      lastUpdate: updated }

    return summaryData

  } catch(err) {
      return err;
  }
}

export const fetchCountries = async() => {
  try {
    const response  = await axios.get(`${baseURL2}/countries`);

    return response.data.map((country) => country.country);
  } catch(err) {
    return err;
  }
}


export const fetchDailyData = async () => {
  try {

    const { data } = await axios.get(`${baseURL}/daily`);
    
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

  } catch (error) {
    return error;
  }
};


export const fetchCountriesDetailedStats = async () => {
  try {
    const { data }  = await axios.get(`${countriesStatsAPI}`);

    return data;

  } catch (err) {
    return err
  }
}


export const fetchAllData = async () => {
  try {
    const countriesData = `${baseURL2}/countries`

    const response = await axios.get(countriesData)
    const countryInfoDetails = response.data.map((data, idx) => {
      return {
        country: data.country,
        countryInfo: data.countryInfo,
        cases: data.cases,
        updated: data.updated
      }
    })
    return countryInfoDetails
  } catch (error) {
    return error;
  }
}