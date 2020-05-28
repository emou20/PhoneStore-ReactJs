import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

export default class InscriptionPage extends Component {
    render() {
        return (
            <div className="partInscri">
                     <div className="titrePartInscri">Inscrivez-vous</div>
                     <div className="nonInscriParag">Bienvenu à notre boutique en ligne , si vous n'ete pas encore inscrie , alors c'est l'occasion de le faire , il suffit juste de remplire ce formulaire et le tour est joué !</div>
                        <FormGroup>
                            <Label for="exampleNom">Nom et Prénom</Label>
                            <Input type="text" name="nom" id="exampleNom" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmailInscri">Email</Label>
                            <Input type="email" name="emailInscri" id="exampleEmailInscri" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePasswordInscri">Password</Label>
                            <Input type="password" name="passwordInscri" id="examplePasswordInscri" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleTel">Téléphone</Label>
                            <Input type="text" name="tel" id="exampleTel" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAdresse">Adresse</Label>
                            <Input type="textarea" name="adresse" id="exampleAdresse" placeholder="with a placeholder" />
                        </FormGroup>
                        <Button>Inscrivez-vous</Button>
                 </div>
        )
    }
}
