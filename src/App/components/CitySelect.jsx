import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CitySelect(props) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(props.value);

  function fetchCities() {
    Axios({
      method: "GET",
      url: `https://api.openaq.org/v2/cities?limit=1000&page=1&offset=0&sort=asc&country_id=${props.countryCode}&order_by=city`
    }).then((response) => {
      setCities(response.data.results.map(function (cities) {
        var city = { "value": cities.city, "label": cities.city };
        return city;
      }));
    }).catch((error) => {
      if (error.response) {
        console.log(error.message);
        setCities("Error loading cities. " + error.message);

      }
    })
  }

  useEffect(() => {
    console.log(`City: ${props.city}`)
    if (city)
      fetchCities();
  }, [props.countryCode]);

  const handleChange = (event) => {
    setCity(event.target.value);
    props.callBack(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id={`${props.name}_label`} >Select City</InputLabel>
        <Select
          labelId={`${props.name}_label`}
          id={`${props.name}_select`}
          value={city}
          label="City"
          onChange={handleChange}
        >
          {cities.map((city) => (
            <MenuItem key={city.value} value={city.value}>{city.label}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}