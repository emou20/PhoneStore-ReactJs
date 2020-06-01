import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';


const initialState = {
  nom: "",
  emailInscri: "",
  passwordInscri: "",
  Tel: "",
  adresse: "",
  nomError: "",
  emailInscriError: "",
  passwordInscriError: "",
  TelError: "",
  adresseError: "",
};

export default class InscriptionPage extends Component {
    state = initialState;

    handleChange = event => {
        this.setState({
          [event.target.name]:event.target.value
        });
      };

      validate = () => {
        let nomError = "";
        let emailInscriError= "";
        let passwordInscriError= "";
        let TelError= "";
        let adresseError= "";
    
        if (!this.state.nom) {
            nomError = "Le champ (Nom et prénom) est vide !";
        }
        if (!this.state.emailInscri) {
            emailInscriError = "Le champ Email est vide !";
        }else {
            if (!this.state.emailInscri.includes("@")) {
                emailInscriError = "invalid email";
              }
        }
        if (!this.state.passwordInscri) {
            passwordInscriError = "Le champ Passeword est vide !";
        }
        if (!this.state.Tel) {
            TelError = "Le champ Téléphone est vide !";
        }
        if (!this.state.adresse) {
            adresseError = "Le champ Adresse est vide !";
        }
    
        
    
            if (nomError || emailInscriError || passwordInscriError || TelError || adresseError) {
          this.setState({ nomError, emailInscriError, passwordInscriError, TelError , adresseError});
          return false;
        }
    
        return true;
      };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };
    render() {
        const {nom, emailInscri,passwordInscri,Tel, adresse, nomError,emailInscriError, passwordInscriError, TelError, adresseError} = this.state;
        return (
            <div className="partInscri">
                     <div className="titrePartInscri">Inscrivez-vous</div>
                     <div className="nonInscriParag">Bienvenu à notre boutique en ligne , si vous n'ete pas encore inscrie , alors c'est l'occasion de le faire , il suffit juste de remplire ce formulaire et le tour est joué !</div>
                        
                        <form  onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleNom">Nom et Prénom</Label>
                                <Input type="text" name="nom" id="exampleNom" placeholder="with a placeholder" value={nom} onChange={this.handleChange} />
                                <div className="errorMessage">{nomError}</div>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="exampleEmailInscri">Email</Label>
                                <Input type="email" name="emailInscri" id="exampleEmailInscri" placeholder="with a placeholder" value={emailInscri} onChange={this.handleChange} />
                                <div className="errorMessage">{emailInscriError}</div>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="examplePasswordInscri">Password</Label>
                                <Input type="password" name="passwordInscri" id="examplePasswordInscri" placeholder="password placeholder" value={passwordInscri} onChange={this.handleChange} />
                                <div className="errorMessage">{passwordInscriError}</div>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="exampleTel">Téléphone</Label>
                                <Input type="number" name="Tel" id="exampleTel" placeholder="with a placeholder" value={Tel} onChange={this.handleChange} />
                                <div className="errorMessage">{TelError}</div>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="exampleAdresse">Adresse</Label>
                                <Input type="textarea" name="adresse" id="exampleAdresse" placeholder="with a placeholder" value={adresse} onChange={this.handleChange} />
                                <div className="errorMessage">{adresseError}</div>
                            </FormGroup>
                            
                            <Button>Inscrivez-vous</Button>
                        </form>

                 </div>
        )
    }
}
