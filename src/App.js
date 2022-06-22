// import logo from './logo.svg';
import './App.css';
import Page1 from './screens/Page1'; 
import Success from './screens/Success';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Page1/>}/> 
        <Route path={`${process.env.PUBLIC_URL}/success`} element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 