import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';
import { Redirect } from 'react-router';

class PanierPage extends Component {



    handleClickDelet = (index) => {
        this.props.DeletPanier(index)
    }

    componentDidMount(){
        this.props.ClosePanier(false)
    }
    

    render() {
        let TotalePanier = 0;
        
        if (!this.props.islogin){
            return  <Redirect to='/Authentification'/>;
        }
        
        return (
            <div className="container pagePanier">
                
                <div class="TitreBlock">Votre panier</div>
              <Table striped>
                        <thead>
                            <tr>
                            <th>Quantité</th>
                            <th>Photo</th>
                            <th>Réferance</th>
                            <th>Nom de produit</th>
                            <th>Prix</th>
                            <th></th>
                            </tr>
                        </thead>
                    <tbody>
                        
                        {
                        this.props.Panier.map((el, index) =>(

                            TotalePanier = TotalePanier + el.produit.prix * el.quantite,

                            <tr key={el.id}>
                                <th scope="row">{el.quantite}</th>
                                <td><img src={el.produit.photo} alt="" className="photoProdPanier" /></td>
                                <td>{el.produit.ref}</td>
                                <td>{el.produit.nom}</td>
                                <td className="panierPrix">{el.produit.prix * el.quantite} DT</td>

                                <td><button className="deletButton" onClick={() => this.handleClickDelet(index)}></button></td>

                            </tr>

                        ))
                        }

                            <tr>
                        <td colSpan="3"><a href="" className="bttAllerPanier">Confirmer la commande</a></td>
                    <td className="TotalPanier" colSpan="3"><span>Totale :</span> {TotalePanier} DT</td>

                            </tr>
                        
                    </tbody>
                </Table>  
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        Panier : state.Panier,
        islogin : state.islogin,
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        ClosePanier: (closePanier) => {
            dispatch({type: "CLOSE_PANIER",isopen:closePanier })
        },
        DeletPanier: (index) => {
            dispatch({type: "DELET_PROD_PANIER",Index:index })
        }
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(PanierPage);