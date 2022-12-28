import React, {useCallback, useReducer, useState} from 'react';
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

const initialState = {
    enteredName: "",
    message: ""
};

function App() {
    const [{message,enteredName},dispatch] = 
    useReducer(reducer,initialState);
    
    const [startCount,setStartCount] = useState(0);
    const [count, setCount] = useState(0);
    
    const setCountCallback = useCallback(()=> {
        const inc = count + 1 > startCount ? count + 1: Number(count+1) + startCount;
        setCount(inc);
    },[count,startCount]);
    
}



export default App;
