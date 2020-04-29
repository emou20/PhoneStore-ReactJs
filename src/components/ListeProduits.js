import React, { Component } from 'react';
import Pagination from './Pagination';
import axios from "axios"

export default class ListeProduits extends Component {
     // an example array of items to be paged
     constructor() {
        super();
        this.state = {
        produit:[],
        pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this);
}

    componentDidMount() {
        axios.get("https://api.npoint.io/0a2e97ff28ae10da02ca")
        .then(res => { 
          this.setState({ 
              produit:res.data
          });
        })
    } 
    onChangePage (pageOfItems){
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        console.log(this.state.produit)
        return (
            <div className="container">
                <div className="TitreBlock">Mobile</div>
                <div className="col conteneurBoxProd">
                {this.state.pageOfItems.map(el => (
                    
                    <div className="boxProd col-3" key={el.id}>
                        
                            <a href={"/details-produit/" + el.id } className="imageProduit"><img src={el.photo} alt="" /></a>
                            <a href={"/details-produit/" + el.id } className="titreProduit">{el.nom}</a>
                            <div className="prixProduit">Prix : {el.prix}</div>
                         
                    </div>
                ))}

                </div>
                <Pagination items={this.state.produit} onChangePage={this.onChangePage} />
            </div>
        )
    }
}
