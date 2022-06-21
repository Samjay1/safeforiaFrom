// import logo from './logo.svg';
import './App.css';
import Page1 from './screens/Page1'; 
import Success from './screens/Success';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>}/> 
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 