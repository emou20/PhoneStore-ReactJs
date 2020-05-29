import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';



class LoginPage extends Component {

    state={
        username:'',
        password:'',
        error:false
    }

    userNameChange = (e) =>{
        this.setState({
            username:e.target.value
        })
    }

    passChange = (e) => {
        this.setState({
            password: e.target.value
        })

    }

    loginFunction(){
        fetch('https://cors-anywhere.herokuapp.com/http://drive.founa.com/api/login_check', {
            body:JSON.stringify(this.state),
            method:'POST',
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              
              
        }).then((resp) => {

            resp.json().then(result => {
                console.log("resp",result.code)
                if (result.code===401) {
                    this.setState({
                        error:true
                    })
                   
                }
                    sessionStorage.setItem('login', JSON.stringify({
                        login:true,
                        token:result.token,
                    }))
                    sessionStorage.setItem('user', JSON.stringify({
                        user:result.userDetails.fullName,
                    }))
                    this.props.IsLogin(true)
                    this.props.UserLogin(JSON.parse(sessionStorage.getItem('user')))   
           

               
            })
        })

    }

    render() {
       if (this.props.islogin){
            return  <Redirect to='/'/>;
        }
        let classError = "noError";
        if (this.state.error){
            classError = "noError toError"
        }
        return (
            <div className="partLogin">
                
                    <div className="titrePartInscri">Login</div>
                    <div className="nonInscriParag">Si vous étes deja inscrie , il vous suffit juste de vous connectez !</div>
                        <div className={classError}>
                        Vérifier votre login ou mot de passe !
                        </div>
                        <form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" value={this.state.username} onChange={this.userNameChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={this.state.password} onChange={this.passChange} />
                            </FormGroup>
                            <Button onClick={() => this.loginFunction()}>Connectez-vous</Button>
                        </form>
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
            dispatch({type: "IS_LOGIN",islogin:islogin,  })

        },
        UserLogin: (userlogin) => {
            dispatch({type: "USER_LOGIN", userlogin:userlogin })
        }
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);