import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CountrySelect(props) {
  const [countryCode, setCountryCode] = useState(props.value);
  const countries = props.data;

  /*const countries = [
    { label: 'USA', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Mexico', value: 'MX' },
  ];//*/

  const handleChange = (event) => {
    setCountryCode(event.target.value);
    props.callBack(event.target.value);
  };

  return (

    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id={`${props.name}_label`} >Select Country</InputLabel>
        <Select
          labelId={`${props.name}_label`}
          id={`${props.name}_select`}
          value={countryCode}
          label="Country"
          onChange={handleChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>{country.label}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>

  );

}

