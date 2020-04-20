import { createStore } from "redux";
import rootReducer from "../reducers";


function loadState(){
  try{
      const state = localStorage.getItem('Panier');

      if(state !== null){
          return JSON.parse(state);
      }        
  } catch(e){
      // ignore errors
  }

  return {
    Panier: [],
    isopen: false
  };
}


function saveState(state){
  localStorage.setItem('Panier', JSON.stringify(state));
}

//initialisation sans LocalStore
/* const initialState = {
    Panier: [],
    isopen: false
  }; */

const store = createStore(rootReducer, loadState() , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  saveState(store.getState());
});


export default store;