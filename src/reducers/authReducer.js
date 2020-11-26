/*
{
     uid: , 
     name: 'Fernando'
}
*/

import { types } from "../types/types";

export const authReducer=(state={}, action)=>{

     switch (action.type) {
          case types.Login:
               return{
                   uid: action.payload.uid, 
                   name: action.payload.displayName 
               }
          case types.Logout: 
          return{}             
     
          default:
               return state;
     }
}