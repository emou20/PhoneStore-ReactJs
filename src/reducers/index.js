import { ADD_PANIER } from "../actions/action-types";
import { CLOSE_PANIER } from "../actions/action-types";
import { OPEN_PANIER } from "../actions/action-types";
import { DELET_PROD_PANIER } from "../actions/action-types";


function rootReducer(state, action) {
  console.log(action.type);
  if (action.type === ADD_PANIER) {
    state.Panier=[...state.Panier,{produit:action.produit, quantite:action.quantite }]
   console.log("state Reducer", state.Panier )
   return {...state}; 
  } 
  if (action.type === CLOSE_PANIER) {
    state.isopen=action.isopen
   return {...state}; 
  } 
  if (action.type === OPEN_PANIER) {
    state.isopen=action.isopen

   return {...state}; 
  } 
  if (action.type === DELET_PROD_PANIER) {
    
    const ProdIndex=action.Index
    const new_state = {...state};
    new_state.Panier.splice(ProdIndex, 1);


    return {...new_state};

  } 
  
  return state;
}

export default rootReducer;