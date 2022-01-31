import React, { Component, useRef} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



class Search_bar extends React.Component {
    render() {
    return (
        <>
        <TextField
            label="Long URL "
            defaultValue="Long URL"
            fullWidth
        />
        </>
    )
  }
}
    
export default Search_bar;