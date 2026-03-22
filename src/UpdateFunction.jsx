// update function -> A function passedd as an arguement to setState() usually 
//                    ex: setYear(arrow function)

import { func } from 'prop-types';
import React, {useState} from 'react';

function UpdateFunction() {
    const [count, setCount] = useState(0);

    function increment () {
        setCount (c => c + 1);
        setCount (c => c + 1);
        setCount (c => c + 1);

    }
    function decrement() {
        setCount (c => c - 1);
        setCount (c => c - 1);
        setCount (c => c - 1);  
    }

    function reset() {
        setCount (0);
    }

    return (
        <div>
            <h2>Count: {count} </h2>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )

}
export default UpdateFunction;