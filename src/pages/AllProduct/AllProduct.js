import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {

    const { _id, name, img, description, price } = props.allProduct;
    return (
        <div className="col-lg-3 mb-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Price: ${price} </Card.Title>
                    <Link to={`/booking/${_id}`}><Button variant="primary">Buy Now</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProduct;