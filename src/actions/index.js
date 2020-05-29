import { ADD_PANIER } from "../actions/action-types";
import { CLOSE_PANIER } from "../actions/action-types";
import { OPEN_PANIER } from "../actions/action-types";
import { DELET_PROD_PANIER } from "../actions/action-types";
import { IS_LOGIN } from "../actions/action-types";
import { ISUSER_LOGINLOGIN } from "../actions/action-types";

export function addPanier(ProduitPanier, QantitePanier) {
    return { type: ADD_PANIER, ProduitPanier, QantitePanier }
  };
  export function ClosePanier(closePanier) {
    return { type: CLOSE_PANIER, closePanier }
  };  
  export function OpenPanier(openPanier) {
    return { type: OPEN_PANIER, openPanier }
  };
  export function DeletPanier(refProd) {
    return { type: DELET_PROD_PANIER, refProd }
  };
  export function IsLogin(islogin) {
    return { type: IS_LOGIN, islogin }
  };  
  export function UserLogin(userlogin) {
    return { type: USER_LOGIN, userlogin }
  };