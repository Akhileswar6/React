function List() {
    const fruits = [{id:1,name:"Apple",calories:52},
                    {id:2,name:"Banana",calories:89},
                    {id:3,name:"Orange",calories:47},
                    {id:4,name:"Pineapple",calories:50}];
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //Alphabetical    
    // fruits.sort((a,b) => b.name.localeCompare(a.name));  //Reverse Alphabetical

    // fruits.sort((a,b) => a.calories - b.calories);   //Numerical Ascending
    // fruits.sort((a,b) => b.calories - a.calories);   //Reverse Numerical
    

    // const lowCalFruit = fruits.filter(fruit =>fruit.calories < 60);


    const listitems = fruits.map(fruits => <li key={fruits.id}>
                                            {fruits.name} - &nbsp;
                                            <b>{fruits.calories}</b> calories</li>)

    return(<ol>{listitems}</ol>)
}
export default List