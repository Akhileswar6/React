function Click () {
    let count = 0;

    // const handleClick = (name) => {
    //     if(count < 2){
    //         count++;
    //         console.log(`${name} You Clicked Me ${count} times`);
    //     }
    //     else{
    //         console.log(`Stop Clicking Me ${name}`);
    //     }
    // };


    const handleClick = (e) => e.target.textContent = "OUCH!😁";

    return (
        <button onDoubleClick={(e) => handleClick(e)}>
            Click Me😉
        </button>
    );
}
export default Click;
