import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

export default function AirQualityItem(props) {
    const [parameterData, setParameterData] = useState([]);

    function fetchInitialData() {
        Axios({
            method: "GET",
            url: "https://api.openaq.org/v2/parameters?limit=100&page=1&offset=0&sort=asc&order_by=id"
        }).then((response) => {
            setParameterData(response.data.results.map(function (parameter) {
                return { "code": parameter.name, "value": parameter.displayName, "desctiption": parameter.description }
            }));
        }).catch((error) => {
            if (error.response) {
                console.log(error.message);
                setParameterData("Error loading AQ paramter name map. " + error.message);
            }
        });
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    function getReadableName(parameter) {
        var result = parameterData.find((p) => { return p.code === parameter });
        if (result) {
            return (result.value);
        } else {
            console.log(`AQIp: ${parameter}`)
            return parameter;
        }
    }

    function getDescription(parameter) {
        var result = parameterData.find((p) => { return p.code === parameter });
        if (result) {
            return (result.desctiption);
        } else {
            console.log(`AQId: ${parameter}`)
        }
    }

    return (
        <Tooltip title={getDescription(props.value.aqType)} placement="bottom-start" arrow>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Grid>{getReadableName(props.value.aqType)}:</Grid>
                <Grid>{props.value.value}</Grid>
            </Grid>
        </Tooltip>
    );
}
