import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import '../my-style.scss'

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <Link to="/">#VANLIFE</Link>
        <nav> 
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <div style={{marginTop:'90px'}}>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
