import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';



class PanierBlock extends Component {

    state={
        Panier:[]
    }

    handleClick = () => {
        this.props.ClosePanier(false)
    }
    componentWillReceiveProps(propsReceiv){
        console.log(this.props.Panier)
        this.setState({
            Panier:propsReceiv.Panier
        })
    }
    handleClickDelet = (index) => {
        this.props.DeletPanier(index);
        console.log(this.props.Panier)
        this.setState({
            Panier:this.props.Panier
        })
    }

 /*    calculTotal = () => {
        let TotalePanier = 0;
        this.props.Panier.forEach(element => 
            TotalePanier = TotalePanier + element.produit.prix * element.quantite
           
        );


    } */
    

    render() {
        let TotalePanier = 0;
        let classPanier = "panierBlock";
        if (this.props.isopen === false){
            classPanier = "panierBlock panierBlockClose"
        }else{
            classPanier = "panierBlock panierBlockOpen"
        }

        
        return (
            <div className={classPanier}>
                <button className="closePanier"  onClick={this.handleClick}>X</button>
                <h1>Votre Panier</h1>
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
                        this.state.Panier.map((el, index) =>(

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
                        <td colSpan="3"><a href="/panier" className="bttAllerPanier">Passer à la caisse</a></td>
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
        isopen : state.isopen
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



export default connect(mapStateToProps, mapDispatchToProps)(PanierBlock);