import React from 'react';
import { Grid, Paper } from '@mui/material';
import Charts from './Todo';
import TableList from './TableList';

const Table = () => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240
          }}
        >
          <Charts />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}></Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TableList />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        // Make counter here
      </Grid>
    </Grid>
  );
};

export default Table;
