import { Grid } from '@mui/material';
import React from 'react';
import BookingProduct from '../BookingProduct/BookingProduct';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <BookingProduct></BookingProduct>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;