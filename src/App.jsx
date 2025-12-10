import Card from './Component';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from "./List";
import Click from './Click';
import ProfilePicture from './ProfilePicture';
import MyComponent from './MyComponent';
import Counter from './Counter';
import MyComponent1 from './MyComponent1';
import ColorPicker from './ColorPicker';
import UpdateFunction  from  './UpdateFunction';
import UpdateState from './UpdateState';
import UpdateArrays from './UpdateArrays';
import UpdateArrayObject from './UpdateArrayObject';

function App(){
  return (
    <>
      <Card />
      <br />
      <Button />


      {/* <h2>Student Details</h2>
      <Student name="Akhil" age={19} isStudent={true}/>
      <Student name="John" age={25} isStudent={false}/>
      <Student name="Sara" age={20} isStudent={true}/>
      <Student name="Krishna"/> */}

      <UserGreeting isLoggedIn={true} username='vinay' />

      <h2>Fruit List</h2>
      <List />

      <Click />
        <br />
      <ProfilePicture />


      <MyComponent />
      <Counter />

      <MyComponent1  />

      <ColorPicker />
      <UpdateFunction />

      <UpdateState />
      <UpdateArrays />
      <UpdateArrayObject />
    </>
  );
}

export default App;