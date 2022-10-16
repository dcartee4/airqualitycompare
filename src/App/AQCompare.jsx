import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CountrySelect from './components/CountrySelect';
import CitySelect from './components/CitySelect';
import AirQaulity from './components/AirQuality';

export const AQCompare = (props) => {
    const [countryData, setCountryData] = useState([]);
    const [country1, setCountry1] = useState('US');
    const [country2, setCountry2] = useState('US');
    const [city1, setCity1] = useState('Boston');
    const [city2, setCity2] = useState('Los Angeles');

    function fetchInitialData() {
        Axios({
            method: "GET",
            url: "https://api.openaq.org/v2/countries?limit=200&page=1&offset=0&sort=asc&order_by=country"
        }).then((response) => {
            setCountryData(response.data.results.map(function (country) {
                return { "value": country.code, "label": country.name }
            }));
        }).catch((error) => {
            if (error.response) {
                console.log(error.message);
                setCountryData("Error loading countries. " + error.message);
            }
        });
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    function country1Callback(countryCode) {
        setCountry1(countryCode);
        setCity1('');
    }
    function country2Callback(countryCode) {
        setCountry2(countryCode);
        setCity2('');
    }

    return (
        <div>
            <Grid container >
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} >
                    <CountrySelect data={countryData} value={country1} callBack={(countryCode) => { country1Callback(countryCode); }} />
                    <CitySelect value={city1} countryCode={country1} callBack={(city) => { setCity1(city); }} />
                    {(city1) && <AirQaulity city={city1} />}
                </Stack>
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} >
                    <CountrySelect data={countryData} value={country2} callBack={(countryCode) => { country2Callback(countryCode); }} />
                    <CitySelect value={city2} countryCode={country2} callBack={(city) => { setCity2(city); }} />
                    {(city2) && <AirQaulity city={city2} />}
                </Stack>
            </Grid>
        </div>

    )

}

export default AQCompare;