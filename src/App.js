import './App.css';
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from './Create';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
        </Routes>
        <Home/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
