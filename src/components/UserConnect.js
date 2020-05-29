import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';



class UserConnect extends Component {
   
    logOut(){
        sessionStorage.clear();
        this.props.IsLogin(false)
    }
    render() {
        return (
            <div className="userConnect">
                {!this.props.islogin ?
               <a href="/Authentification" className="seconnect">Se connecter</a> 
                :
                <div className="contConnected"> 
                    <div className="userConneted">Bienvenue {this.props.username.user}</div> 
                    <button  className="deconnect" onClick={() => this.logOut()}>Logout</button>
                </div>
                }
               {/* <a href="/Authentification" className="Inscription">Inscription</a> */}
            </div>
        )
    }
}




function mapStateToProps(state){
    return {
        islogin : state.islogin,
        username : state.username,
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        IsLogin: (islogin) => {
            dispatch({type: "IS_LOGIN",islogin:islogin })
        }
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(UserConnect);