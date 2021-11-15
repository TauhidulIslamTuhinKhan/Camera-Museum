import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const BookingProduct = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/bookingProducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    const handleRemove = id => {
        const proceed = window.confirm('Are you sure, you want to Remove this?');
        if (proceed) {
            const url = `http://localhost:5000/bookingProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>My Orders : {products.length} </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Booking Product table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Client Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.productName}
                                </TableCell>
                                <TableCell align="right">{row.userName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleRemove(row._id)} type="submit" variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BookingProduct;