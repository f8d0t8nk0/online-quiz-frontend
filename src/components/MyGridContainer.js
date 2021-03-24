import React from 'react';
import Grid from '@material-ui/core/Grid';


function MyGridContainer({ children }) {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={9} lg={6} xl={4}>
                {children}
            </Grid>
        </Grid>
    );
}

export default MyGridContainer;
