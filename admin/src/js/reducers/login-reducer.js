'use strict'


import * as types from '../actions/types.js';

import merge from 'lodash/merge';


export const  loginUpdate = (state={is_login:false},action)=>{
    alert('action-reducer');
    switch (action.type) {
      case types.SET_LOGIN_STATE:
          return merge({}, state,  { is_login: action.data });
      default:
    }
    return state;
};

// const initialState = {
//   number: 1
// }
//
// export default function update(state = initialState, action) {
//   if(action.type === INCREASE) {
//     return { number: state.number + action.amount }
//   }
//   else if(action.type === DECREASE) {
//     return { number: state.number - action.amount }
//   }
//   return state
// }
