import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./GreetingFunctional";
import ListCreator, { ListItem } from "./ListCreator";

const reducer = (state: any, action: any) => {
    console.log("enteredNameReducer");
    switch (action.type){
        case "enteredName":
            if(state.enteredName === action.payload) {
                return state;
            }
            return {...state, enteredName: action.payload}
        case "message":
            return {...state, message: 'Witaj ' + action.payload}
        default:
            throw new Error("Nieprawidłowy typ akcji: " + action.type);
    }
}



export default App;
