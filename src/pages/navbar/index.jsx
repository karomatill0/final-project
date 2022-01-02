import React from 'react'
import dashboard from "../../assets/icon/dashboard (1).png";
import { Card, Card1, Img, NavbarW } from './styles';
import basket from "../../assets/icon/shopping-cart (1).png";
import customer from "../../assets/icon/customer.png"
import message from "../../assets/icon/email.png"
import settings from "../../assets/icon/settings.png"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Navbar() {
    const { pathname } = useLocation();
    const { pathnama } = useLocation();
    return (
        <>
            <NavbarW>
                <h3>E-Commerse</h3>
                <Card active={pathname==="/dashboard"} >
                    <Img src={dashboard} alt="" />
                    <Link to="/dashboard" activ={pathnama==="/dashboard"} > Dashboard</Link>
                </Card>
                <Card1 active={pathname==="/products"} >
                    <Img src={basket} alt="" />
                    <Link to="/products" activ={pathnama==="/products"} >Products</Link>
                </Card1>
                <Card1 active={pathname==="/history"} >
                    <Img src={customer} alt="" />
                    <Link to="/history" activ={pathnama==="/history"} >History</Link>
                </Card1>
                <Card1 active={pathname==="/"} >
                    <Img src={message} alt="" />
                     <a> Message</a>
                </Card1>
                <Card1 active={pathname==="/"} >
                    <Img src={settings} alt="" />
                    <a >Message</a>
                </Card1>
            </NavbarW>
        </>
    )
}

export default Navbar
