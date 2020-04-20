import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
        <div className="footer container-fluid">
           <div className="container">
                <div className="copyright">Copyright React js 2020</div>
                <div className="menufooter">
                    <a href="/" className="lienfooter">Accueil</a>
                    <a href="/liste-produits" className="lienfooter">Mobile</a>
                </div>
            </div> 
        </div>
        )
    }
}
