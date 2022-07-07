
import './App.css';
import Topbar from './Component/Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Component/LandingPage/LandingPage';

import TableComp from './Component/TableComp/TableComp';


function App() {

  return (
    <div className="App">
     <Topbar/>
     <LandingPage/>
     <TableComp/>
    
    </div>
  );
}

export default App;
