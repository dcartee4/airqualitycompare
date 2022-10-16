import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AirQualtyItem from './AirQualityItem';
import Stack from '@mui/material/Stack';


export default function AirQaulity(props) {

    const [airQualty, setAirQualty] = useState([]);
    const [lastUpdate, setLastUpdate] = useState('');

    function fetchCityAirQuality() {
        Axios({
            method: "GET",
            url: `https://api.openaq.org/v2/latest?limit=100&page=1&offset=0&sort=desc&radius=1000&city=${props.city}&order_by=lastUpdated&dumpRaw=false`
        }).then((response) => {
            setAirQualty(response.data.results[0].measurements.map(function (aqs) {
                var aq = { "aqType": aqs.parameter, "value": aqs.value + ' ' + aqs.unit, };
                return aq;
            }));
            setLastUpdate(response.data.results[0].measurements[0].lastUpdated);
        }).catch((error) => {
            if (error.response) {
                console.log(error.message);
                setAirQualty("Error loading airquality. " + error.message);
            }
        })
    }

    useEffect(() => {
        console.log(`AQ: ${props.city}`)
        if (props.city) fetchCityAirQuality();
    }, [props.city])

    function prettyDate(d) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(d).toLocaleDateString([], options);
    }

    return (
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1.5} >
            <div>Air quality for {props.city}.</div>
            <div>Last Updated: {prettyDate(lastUpdate)}</div>
            {airQualty.map(item => (
                <AirQualtyItem value={item} />
            ))}
        </Stack>
    );
}
