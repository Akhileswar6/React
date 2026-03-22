import Student from './1_Props/Student';
import UserGreeting from './2_Conditional Rendering/UserGreeting';
import Status from './2_Conditional Rendering/Status';
import List from "./3_Render lists/List";
import Artist from "./3_Render lists/Artist";
import Click from './4_Click Events/Click';
import Button from './4_Click Events/Button';
import ProfilePicture from './4_Click Events/ProfilePicture';
import MyComponent from './5_UseState/MyComponent';
import Counter from './5_UseState/Counter';
import MyComponent1 from './6_OnChange Event Handler/MyComponent1';


import ColorPicker from './ColorPicker';
import UpdateFunction  from  './UpdateFunction';
import UpdateState from './UpdateState';
import UpdateArrays from './UpdateArrays';
import UpdateArrayObject from './UpdateArrayObject';
import UseEffect from './UseEffect';


function App(){
  return (
    <>
      

      {/* Props */}
      <h2>Student Details</h2>
      <Student name="Akhil" age={19} isStudent={true}/>
      <Student name="John" age={25} isStudent={false}/>
      <Student name="Sara" age={20} isStudent={true}/>
      <br/>


      {/* Conditional Rendering */}
      <UserGreeting isLoggedIn={true} username='Akhil' />
      <Status status = "loading" />
      <Status status = "success" />
      <Status status = "error" />
      <br/>


      {/* Render List */}
      <h2>Fruit List</h2>
      <List />
      <h2>Artist List</h2>
      <Artist/>
      <br/>


      {/* Click Events */}
      <h2>Click Events</h2>
      <Click />
      <Button />
        <br />
        <br/>
      <ProfilePicture />


      {/* useState */}
      <h2>React hooks & useState</h2>
      <MyComponent />
      <Counter />
      <br/>
      <br/>


      {/* On Change Event Handler */}
      <MyComponent1  />



      <ColorPicker />
      <UpdateFunction />

      <UpdateState />
      <UpdateArrays />
      <UpdateArrayObject />

      <UseEffect />
      
    </>
  );
}

export default App;