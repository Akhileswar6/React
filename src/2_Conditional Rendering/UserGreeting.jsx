// Conditional Rendering = Showing different UI based on a condition

// User logged in → show Dashboard
// User not logged in → show Login page


import PropTypes  from "prop-types";

function UserGreeting({isLoggedIn = false, username = "Guest"}) {

    if (isLoggedIn) {
        return <h2 className="welcome">Welcome {username}!</h2>;
    }
    else{
        return <h2 className="login">Please log in to continue.</h2>;
    }



    
    const welcome = <h2 className="welcome"> Welcome {username} !</h2>

    const login = <h2 className="login"> Please log in to Continue.</h2>


    return (props.isLoggedIn ? welcome  :  login );



    
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}


export default UserGreeting;