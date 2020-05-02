import React from 'react';
import {Switch, Route } from 'react-router-dom';

import ListeProduits from './ListeProduits';
import Home from "./Home";
import DetailsProduit from "./DetailsProduit";
import PanierPage from "./PanierPage";
import Authentification from "./Authentification";

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/liste-produits/:categorie" component={ListeProduits} />
        <Route  path="/details-produit/:id" component={DetailsProduit} />
        <Route  path="/panier" component={PanierPage} />
        <Route  path="/Authentification" component={Authentification} />
    </Switch>
)

export default Router;