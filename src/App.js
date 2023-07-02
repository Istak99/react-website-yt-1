import "./App.css"
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Pages/Home"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
        </Routes>
      </Router>
        
      
    </>
  );
}

export default App;
