import Card from './Component';
import Button from './Button';
import Student from './Student';
import UserGreeting from './UserGreeting';


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



    </>
  );
}

export default App;