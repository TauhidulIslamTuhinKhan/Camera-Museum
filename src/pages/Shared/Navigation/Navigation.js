import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Camera Museum</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="header-text" to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}> Home </NavLink>
                        {/* <NavLink className="header-text" to="/addproduct" activeStyle={{ fontWeight: "bold", color: "red" }}> Add Product </NavLink> */}
                        <NavLink className="header-text" to="/allproducts" activeStyle={{ fontWeight: "bold", color: "red" }}> All Products </NavLink>
                        {user?.email ? <>
                            <NavLink className="header-text" to="/dashboard" activeStyle={{ fontWeight: "bold", color: "red" }}> Dashboard </NavLink>
                            <NavLink onClick={logout} className="header-text" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}> Logout </NavLink>
                        </>
                            : <NavLink className="header-text" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}> Login </NavLink>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;