import React, { Component } from 'react';
import axios from 'axios';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

export default class NavbarCateg extends Component {
    state = {
        categ:[]
    }

    componentDidMount() {
        axios.get("http://www.json-generator.com/api/json/get/cgxLLQkkte?indent=2")
        .then(res => { 
          this.setState({ 
            categ:res.data
          });
        })
    } 

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Accueil</NavLink>
                        </NavItem>
                        {this.state.categ.map((el, index) => (
                            <NavItem key={index}>
                                <NavLink href={"/liste-produits/"+el.categorie }>{el.alias_categ}</NavLink>
                            </NavItem> 
                         ))}
                    </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}
