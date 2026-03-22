//UseEffect -> React hook that tells react to do some specific task after every render of the component

import React, { useState, useEffect } from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`;
    });

    function addCount() {
        setCount(c => c + 1);
    }

    return (
        <>
            <h1>UseEffect Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={addCount}>Add</button>
        </>
    )
}
export default UseEffect;