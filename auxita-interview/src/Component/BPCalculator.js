import React from 'react';
import {useEffect, useState} from 'react';

 const BPCalculator = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/api').then(res => {
            console.log(res)
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => console.log(jsonResponse))
        .catch(err => console.log(err))
    },[]);

    //console.log(initialState);
    return (
        <div className="App">
            Hey there
        </div>
    );
}
export default BPCalculator;