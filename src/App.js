import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Navbar from './component/Navbar';
import Jobrecord from './component/Jobrecord';



function App() {
  return (
    
    <div className="App">

       <Navbar  username=" usergbolaha@hotmail.com"/>
       < Jobrecord />
       <Welcome />
      <Greet />
     
     <Hello />
    </div>
  );
}

export default App;
