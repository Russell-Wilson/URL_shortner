import React from 'react';
import { Button, Box, Paper, Grid, TextField} from '@mui/material';
import axios from 'axios';
import CustomPaginationActionsTable from './Table_des.js';
import './myStyles.css'


const api = axios.create({
  baseURL: `http://localhost:5000`
})

class Create_route extends React.Component {

  
state = {
    urls: [],
    UserIn: '',
    SiteName: '',
  }

  constructor() {
    super();
    this.GetLinks();
  }

  GetLinks = async () => {
    let data = await api.get('/results').then(({ data }) => data);
    this.setState({urls: data})
  }

  Geturlvalue (event) {
    var modifiedValue = event.target.value;
    // Update the state object
    this.setState({
      UserIn: modifiedValue
    }, )
  }

  Getnamevalue (event) {
    var modifiedValue = event.target.value;
    // Update the state object
    this.setState({
      SiteName: modifiedValue
    }, )
  }

  Createlink = async () => {
    let id = this.state.UserIn
    let name = this.state.SiteName
    if (id === '' || name === ''){
    alert('Please ensure a site name and site url are added')}else{
    let res = await api.post(`/url`, {url: `${id}`, s_name: `${name}`})
    this.GetLinks()}
  }


    render() {

    return (
        <>  
          <Box sx={{ height: 100, width: '100%' }} />
              <Paper>
                <TextField 
                  defaultValue="Create new URL" 
                  margin="none"
                  fullWidth 
                  className='d1class' />
              </Paper>
              <Paper className='d1class'>
                <Grid className='grid1'container spacing={4}>
                <Grid item xs={6} md={5} >
                      <TextField label="Site name" 
                            onChange={this.Getnamevalue.bind(this)}
                            defaultValue="Enter site name here" 
                            margin="none"
                            variant="filled"
                            fullWidth />
                    </Grid>  
                  <Grid item xs={6} md={5} >
                      <TextField label="Long URL" 
                            onChange={this.Geturlvalue.bind(this)}
                            defaultValue="Enter long URL here" 
                            margin="none"
                            variant="filled"
                            fullWidth />
                    </Grid>              
                    <Grid item xs={6} md={2}>
                    <Button 
                    onClick={this.Createlink.bind(this)}
                    color='success' className='searchbutton' variant="contained" fullWidth>
                      Create short url
                    </Button>
                    </Grid>
                    <Grid item xs={6} md={12}>
                      <CustomPaginationActionsTable table_urls={this.state.urls}/>
                    </Grid>
                  </Grid>
              </Paper>
            
      </>
    )
  }
}

export default Create_route;