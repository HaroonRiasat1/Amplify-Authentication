import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Premium from './pages/Premium';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <NavLink  className='content' exact activeClassName="active" to="/">Home</NavLink>
          <NavLink  className='content' activeClassName="active" to="/about">About</NavLink>
          <NavLink className='content' activeClassName="active" to="/Premium">Premium</NavLink>

        
          </div>
          <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/premium' element={<Premium></Premium>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
