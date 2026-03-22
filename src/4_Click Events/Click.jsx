// Click event => An interaction when a user clicks on a specific element
//                we can respond to clicks by passing a callback to onClick event handler.


function Click(){

    // const handle = () => console.log("OUCH!")

    // const handle2 = (name) => console.log(`${name} stop clicking me!!`)

    // return (
    //     <>
    //     <button onClick={handle}>Button1</button><br/>
    //     <button onClick={() => handle2("Akhil")}>Button2</button>
    //     </>
    // )



    let count = 0;
    
    const handleClick = (name) => {
        if (count < 3){
            count ++;
            console.log(`${name} you clicked me ${count} times.`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    }

    return (
        <button onClick={() => handleClick("Akhil")}>Click me😉</button>
    )


     
}

export default Click;