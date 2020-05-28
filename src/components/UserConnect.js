import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';

const sessionVide = false

class UserConnect extends Component {
    state={
        username:{},
        islogin:false,
    }

    componentDidMount(){
        this.setState({
            username:JSON.parse(sessionStorage.getItem('user'))
        })
        if (!sessionStorage.getItem('user')){
            this.setState({
                islogin:false
            })
        }

    }


    componentWillReceiveProps(propsReceiv){
        console.log("propsReceiv.islogin", propsReceiv.islogin)
        this.setState({
            islogin:propsReceiv.islogin
        })
        console.log("propsReceiv state", this.state.islogin)
    }

    componentWillUpdate(){
        if (!sessionStorage.getItem('user')){
            sessionVide = true
            alert(sessionVide)
            
        }
       
    }
    
    logOut(){
        sessionStorage.clear();
        this.setState({
            islogin:false
        })
        this.props.IsLogin(false)
    }
    render() {
        if (this.state.islogin){
            return  <Redirect to='/'/>;
        }
        console.log("this.props.islogin",this.props.islogin)

        console.log("this.state.islogin",this.state.islogin)
        return (
            <div className="userConnect">
                {!this.props.islogin ?
               <a href="/Authentification" className="seconnect">Se connecter</a> 
                :
                <div> 
                    <div className="seconnect">Bienvenue {this.state.username.user}</div> 
                    <button onClick={() => this.logOut()}>Logout</button>
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