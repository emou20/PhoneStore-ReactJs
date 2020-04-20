import React, { Component } from 'react';
import {connect} from 'react-redux'

class IconCaddy extends Component {
    
    handleClick = () => {
        this.props.OpenPanier(true)
    }

    
    render() {
        const quantite = this.props.totaleQantite;
        
        return (
            <div>
                <button className="iconCad"  onClick={this.handleClick}><span>{quantite}</span> Votre panier</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        OpenPanier: (openPanier) => {
            dispatch({type: "OPEN_PANIER",isopen:openPanier })
        }
    };
  };

function mapStateToProps(state){
    let totaleQantite = state.Panier.reduce((total, item) => total + item.quantite, 0);
    return {
        totaleQantite
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconCaddy);