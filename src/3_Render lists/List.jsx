// Rendering lists =>  rendering lists in React is a common task when you want to display a collection of items. You can use the `map()` function to iterate over an array and return a list of JSX elements. 


function List (){

    const fruits = [{id:1, name:"apple", calories: 97},
        {id:2, name:"orange", calories: 62},
        {id:3, name:"banana", calories: 189},
        {id:4, name:"kiwi", calories: 44},
        {id:5, name:"coconut", calories: 150},
        {id:6, name:"pineapple", calories: 50}];

        //fruits.sort((a,b) => a.calories - b.calories);
        //fruits.sort((a,b) => a.name.localeCompare(b.name));


        //const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);

        


    const listitems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} - {fruit.calories}</li>)

    return (

    <ul>{listitems}</ul>
    
    );

}

export default List