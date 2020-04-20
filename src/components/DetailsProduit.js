import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import ProdMemeCateg from "./ProdMemeCateg"

class DetailsProduit extends Component {
    state = {
        produit:[],
        quantite:1,
        produitsCateg:[]
    }


    

    

    componentDidMount(){
    // recuperation de l' id de l'url
    const id = this.props.match.params.id;
    const idparset = parseInt(id,10);
    let tableau = [];
        //recuperation des produits json
        axios.get("https://api.npoint.io/0a2e97ff28ae10da02ca")
        .then(res => { 
            tableau = res.data
            //recherche de l'element dans le tableau produits
            const produit = tableau.find(el => parseInt(el.id,10) === idparset)
            const autreprod = tableau.filter(el => parseInt(el.id,10) !== idparset)
           
            //modification du state produit
            this.setState({ 
                produit:produit
            });

            const produitsmmCateg = autreprod.filter(el => el.categorie === this.state.produit.categorie)
            

            this.setState({ 
                produitsCateg:produitsmmCateg
            });
            

        })
    }

    createSelect = () => {
        const select = [];

        for (let i=1; i<= this.state.produit.stoque ; i++) {
        select.push(<option value={i} key={i} >{i}</option>)                    
        }
        return select
    }
    handelQuantite = (event) => {
        const value = parseInt(event.target.value, 10);
        this.setState({
            quantite:value
        })
    }
    handleClick = (produit) => {
        this.props.addPanier(produit, this.state.quantite);
        NotificationManager.success('Produit ajouter au panier');
    }

    clickMoin = () => {
        if (this.state.quantite > 1) {
            let nvQuantite = this.state.quantite - 1
            console.log("nvQuantite", nvQuantite)
            this.setState({
                quantite : nvQuantite
            })
        }
    }
    clickPlus = () => {
        if (this.state.quantite < this.state.produit.stoque) {
            let nvQuantite = this.state.quantite + 1
            this.setState({
                quantite : nvQuantite
            })
        }
    }

    render() {
        const produit = this.state.produit ;
        
        return (
            <div className="detailsProduitPage container">
                <div className="contImgProd"><img src={produit.photo} alt="" /></div>
                <div className="contDetailsProd">
                    <div className="nameProd">{produit.nom}</div>
                    <div className="contnRefProd">Référence : {produit.ref}</div>
                    <div className="contnPrixProd">Prix : {produit.prix} DT</div>
                    
                    <div className="contQuantiteProd">
                        <button className="bttQantite" onClick={() => this.clickMoin()}>-</button>
                        <input type="text" className="inputQantite"  value={this.state.quantite}></input>
                        <button className="bttQantite" onClick={ () => this.clickPlus()}>+</button>
                    </div>
                    <button className="addPanier" onClick={() => this.handleClick(produit)}>Ajouter au panier</button>

                </div>

                <NotificationContainer/>
                <ProdMemeCateg  produitsCateg={this.state.produitsCateg}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        addPanier: (ProduitPanier, QantitePanier) => {
            dispatch({type: "ADD_PANIER",produit: ProduitPanier, quantite: QantitePanier })
        }
    };
  };

export default connect(null, mapDispatchToProps)(DetailsProduit);