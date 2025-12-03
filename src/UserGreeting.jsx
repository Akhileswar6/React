import React from "react";
import PropTypes from "prop-types";


class UserGreeting extends React.Component {
    static defaultProps = {
        isLoggedIn: false,
        username: "Guest"
    };

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        username: PropTypes.string
    };

    render() {
        const welcomeMessage = <h2 className="welcome-message">Welcome {this.props.username}!</h2>;
        const loginPrompt = <h2 className="login-prompt">Please log in to continue.</h2>;

        return (this.props.isLoggedIn ? welcomeMessage : loginPrompt);
    }
}

export default UserGreeting;
