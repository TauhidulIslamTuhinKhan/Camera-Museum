import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://powerful-sands-18483.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '30%' }} label="Email" type="email" onBlur={handleOnBlur} variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {adminSuccess && <p>Made Admin Successfully</p>}
        </div>
    );
};

export default MakeAdmin;