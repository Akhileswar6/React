import React, {useState} from "react";

function UpdateArrayObject() {

    const [cars, setCars] = useState([]);
    const [caryear, setCaryear] = useState(new Date().getFullYear());
    const [carname, setCarname] = useState("");
    const [carcolor, setCarcolor] = useState("");

    function handleAddCar() {

        const newCar = {year:caryear,name:carname,color:carcolor

        };

        setCars(cars => [...cars, newCar]);

        setCaryear(new Date().getFullYear());
        setCarname("");
        setCarcolor("");

    }

    function handleRemoveCar(index) {

        setCars(cars => cars.filter((newcar, i) => i !== index));

    }

    function handleMakeChange(event) {
        setCarname(event.target.value);


    }

    function handleYearChange(event) {
        setCaryear(event.target.value);

    }

    function handleNameChange(event) {
        setCarname(event.target.value);

    }

    function handleColorChange(event) {
        setCarcolor(event.target.value);

    }

    return (
        <div>
            <h2>Car List</h2>
            <ul>

                {cars.map((car, index) => (
                    <li key={index}>
                        {car.name} - {car.year} - {car.color}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <input type="number" value={caryear} onChange={handleYearChange} placeholder="Enter car year" />
            <input type="text" value={carname} onChange={handleNameChange} placeholder="Enter car name" />
            <input type="text" value={carcolor} onChange={handleColorChange} placeholder="Enter car color" />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )


}
export default UpdateArrayObject;