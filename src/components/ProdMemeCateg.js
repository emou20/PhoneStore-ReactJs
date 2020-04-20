import React, { Component } from 'react'

export default class ProdMemeCateg extends Component {
    render() {
        const produitsCateg = this.props.produitsCateg
        return (
            <div className="container boxMemeCateg">
                <div class="TitreBlock">Dans la même categorie</div>
                {produitsCateg.map(el => (
                   
                    <div className="boxProd col-3" key={el.id}>
                        
                            <a href={"/details-produit/" + el.id } className="imageProduit"><img src={el.photo} alt="" /></a>
                            <a href={"/details-produit/" + el.id } className="titreProduit">{el.nom}</a>
                            <div className="prixProduit">Prix : {el.prix}</div>
                         
                    </div>
                ))}
            </div>
        )
    }
}
