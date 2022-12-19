import './App.css';
import Employee from './components/employee'
import {useState} from 'react'

function App() {
  const [role, setRole] = useState('Dev')
    const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>   
         <input 
         type='text' 
         onChange={(e)=> {
          console.log(e.target.value)
          setRole(e.target.value);
         }}
        />
        <Employee name="Badmus" role ="React Dev."/>
        <Employee name="Ibrahim" role = {role}/>
        <Employee name="Olaiya"/>
               
        </>
       ) : (
      <p>You cannot see the employees</p>
       )}
      
    </div>
  );
}

export default App;
