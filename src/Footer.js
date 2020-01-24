import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} align='center' ><br /><br /><br /><br />Made by <a href='https://github.com/danielthestripedtiger'>Daniel Striped Tiger</a> 🐯</Grid>
                </Grid>
            </div>
        )
    }
}
