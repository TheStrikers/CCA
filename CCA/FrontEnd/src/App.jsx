import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';

function App() {
  return <>
    <Header />
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    <Home />
  </>
}

export default App;
