import React, { useState } from 'react';

function UpdateState() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "red"
    });

    function handleBrandChange(event) {
        setCar(c => ({...c, brand: event.target.value}));
    }

     function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

     function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

     function handleColorChange(event) {
        setCar(c => ({...c, color: event.target.value}));
    }
    return (
        <div>
            <p>Your Car Brand is {car.brand} its model is{car.model} manufactured in {car.year} and the color is {car.color}</p>

            <input type="text" value={car.brand} onChange={handleBrandChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.color} onChange={handleColorChange}/><br/>
        </div>
    );
}
export default UpdateState;
