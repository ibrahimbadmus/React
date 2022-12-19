import './App.css';
import Employee from './components/employee'

function App() {
   const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>   
        <Employee name="Badmus" role ="React Dev."/>
        <Employee name="Ibrahim"/>
        <Employee name="Olaiya"/>
               
        </>
       ) : (
      <p>You cannot see the employees</p>
       )}
      
    </div>
  );
}

export default App;
