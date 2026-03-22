// React hook -> Special function that allows functional components to React Features without writing class components.
//               {useState, useEffect, useRef, useContext, useReducer etc} 

//useState() -> useState lets you store and update data (state) in a component.
//              Syntax: const [state, setState] = useState(initialValue);



import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateName = () => {
        setName("Akhileswar");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increase Age</button>

            <p> Logged In: {isLoggedIn ? "Yes" : "No"}</p>
            <button onClick={toggleLogin}>Login Status</button>
        </div>
    );

    
}

export default MyComponent;
