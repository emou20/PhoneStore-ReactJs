import React, { Component } from 'react';
import LoginPage from "./LoginPage";
import InscriptionPage from "./InscriptionPage"

export default class Authentification extends Component {
    render() {
        return (
            <div className="container pageAutentification">
                 <InscriptionPage />
                 <LoginPage />
            </div>
        )
    }
}
