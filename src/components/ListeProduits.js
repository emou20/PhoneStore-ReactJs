import React, { Component } from 'react';
import Pagination from './Pagination';
import axios from "axios"

export default class ListeProduits extends Component {
     // an example array of items to be paged
        state = {
            produit:[],
            pageOfItems: [],
            categorieCourante:[]
    }



    
    componentDidMount() {
        const categ= this.props.match.params.categorie;
        axios.get("http://www.json-generator.com/api/json/get/cpqiZRPzVK?indent=2")
        .then(res => { 
            const prodCateg = res.data.filter(el => categ === el.categorie)
          this.setState({ 
              produit:prodCateg
          });
        })


        axios.get("http://www.json-generator.com/api/json/get/cgxLLQkkte?indent=2")
        .then(res => { 
            const categCourante = res.data.filter(el => categ === el.categorie)
          this.setState({ 
            categorieCourante:categCourante
          });
        })


    } 
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <div className="container">
                 {this.state.categorieCourante.map(el => (
                <div className="TitreBlock">{el.alias_categ}</div>
                ))}
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
