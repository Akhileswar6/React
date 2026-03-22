import React, { useState } from 'react';

function UpdateArrays() {
    const [foods, setfoods] = useState(["Apple", "Banana", "Orange"]);
    
    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setfoods([...foods, newFood]);
    }

    function handleremoveFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setfoods(foods.filter((food) => food !== newFood));

    }

    return (
        <div>
            <h2>List of Food: </h2>

            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>

            <button onClick={handleremoveFood}>Remove Food</button>
            
        </div>
    )
}
export default UpdateArrays;