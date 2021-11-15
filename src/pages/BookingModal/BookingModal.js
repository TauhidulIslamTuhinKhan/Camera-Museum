import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../Hooks/useAuth';
import { Button, TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ products, openModal, handleModalClose, setBookingSuccess }) => {
    const { product, price } = products;
    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {

        // Collect data
        const confirmProduct = {
            ...bookingInfo,
            productName: product,

        }
        // Send data to Database
        // console.log(confirmProduct);
        fetch('https://powerful-sands-18483.herokuapp.com/bookingProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    setBookingSuccess(true)
                    handleModalClose();
                }
            })

        e.preventDefault();
    }


    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {product}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        sx={{ width: '92%', m: 1 }}
                        name="userName"
                        defaultValue={user.displayName}
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '92%', m: 1 }}
                        name="email"
                        defaultValue={user.email}
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '92%', m: 1 }}
                        name="phone"
                        defaultValue='Phone Number'
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '92%', m: 1 }}
                        name="address"
                        defaultValue='Your address'
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '92%', m: 1 }}
                        defaultValue={`Price :$ ${price}`}
                        size="small"
                    />
                    <Button type="submit" variant="contained">Submit</Button>

                </form>

            </Box>
        </Modal>
    );
};

export default BookingModal;