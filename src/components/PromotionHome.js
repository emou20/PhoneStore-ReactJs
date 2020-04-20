import React, { Component } from 'react';
import axios from 'axios';

export default class PromotionHome extends Component {

    state = {
        produit:[]
    }

    componentDidMount() {
        axios.get("http://www.json-generator.com/api/json/get/cjJBKbDxsO?indent=2")
        .then(res => { 
          this.setState({ 
              produit:res.data
          });
        })
    } 
 

    render() {
        return (
            <div className="container">
                <div className="TitreBlock">Nos promotion</div>
                <div className="col conteneurBoxProd">
                {this.state.produit.map(el => (
                    
                    <div className="boxProd col-3 promotion" key={el.id}>
                            <div className="badgePromo">{el.categorie}</div>
                            <a href={"/details-produit/" + el.id } className="imageProduit"><img src={el.photo} alt="" /></a>
                            <a href={"/details-produit/" + el.id } className="titreProduit">{el.nom}</a>
                            <div className="ancienPrixProduit">Prix : {el.ancienPrix} DT</div>
                            <div className="prixProduit"> {el.prix} DT</div>
                         
                    </div>
                ))}

                </div>
            </div>
        )
    }
}
