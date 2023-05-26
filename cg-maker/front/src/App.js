import logo from './logo.svg';
import './App.css';
import './assets/css/responsive.css'; /**나중에 지울 것 아래 Home container 테스트를 위한 impoer */
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//router
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//screen or components
import Main from './screens/Main';
import Login from './screens/Login';
import Join from './screens/Join';
import ProgramAttend from './screens/ProgramAttend';
import Data from './screens/Data';



function App() {
  const userid = localStorage.getItem('user');

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main userid={userid}/>}>
          
        </Route>

        <Route exact path="/Program" element={<ProgramAttend userid={userid}/>}>
          
        </Route>
        <Route path="/data" element={<Data userid={userid}/>}>
        
        </Route>
        <Route path="/login" element={<Login  userid={userid}/>}>
        
        </Route>
        <Route path="/join" element={<Join/>}>
        
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
