// Props => read-only properties that are shared between components.
//          A parent component can send data to a child component using props, but the child component cannot modify those props.
//          Props are immutable and are used to pass data from a parent component to a child component.

//         <Component prop1="value1" prop2={value2} />

import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Is Student : {props. isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
};

export default Student;