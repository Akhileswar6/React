function Button(){


    const styles = {
    backgroundColor: "aquamarine",
    border: "2px solid #008CBA",
    color: "black",
    padding: "10px 24px",
    textalign: "center",
    textdecoration: "none",
    fontsize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "12px",
    }



    return(

        // <button style={styles}>Click Me!</button>

        <button className="button">Click Me!</button>
    );
}

export default Button;