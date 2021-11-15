import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import BookingModal from '../BookingModal/BookingModal';
// import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Booking = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    // const { user } = useAuth();
    const { bookingId } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://powerful-sands-18483.herokuapp.com/products/${bookingId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [bookingId])
    return (
        <div>
            <Navigation></Navigation>
            <div className="container text-center">
                {bookingSuccess && <Alert severity="success"> {products.product} Booked Successfully</Alert>}
            </div>
            <div className="container my-5 d-flex justify-content-center">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={products?.img} />
                    <Card.Body>
                        <Card.Title> {products?.product} </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Title> Price : ${products?.price} </Card.Title>
                        <Button onClick={handleModalOpen} variant="primary">Confirm Buy</Button>
                    </Card.Body>
                </Card>
            </div>
            <BookingModal
                products={products}
                openModal={openModal}
                handleModalClose={handleModalClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </div>
    );
};

export default Booking;