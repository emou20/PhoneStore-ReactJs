import React, { Component } from 'react';
import IconCaddy from "./IconCaddy";
import UserConnect from "./UserConnect";

import {
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="hautHeader"></div>
                <div className="contLogoHeader">
                    <a href="/" className="logoSite"></a>
                    <div className="blockSc">
                        <span>Service client</span>
                        Gratuit : 09 82 21 80 90
                    </div>
                    <div className="blockHt">
                        <span>Ouvert du Lundi au Samedi</span>
                        09:30 - 12:30 / 14h - 19h30
                    </div>
                    <div className="contIconCard">
                        <IconCaddy />
                    </div>
                    <UserConnect />
                </div>
                <div className="navsite">
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/">Accueil</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/liste-produits">Mobile</NavLink>
                        </NavItem> 
                    </Nav>
                </Navbar>
                </div>
            </div>
        )
    }
}
