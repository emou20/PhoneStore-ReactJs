import React, { Component } from 'react'

export default class UserConnect extends Component {
    render() {
        return (
            <div className="userConnect">
               <a href="/Authentification" className="seconnect">Se connecter</a> 
               <a href="/Authentification" className="Inscription">Inscription</a>
            </div>
        )
    }
}
