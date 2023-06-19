import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#VANLIFE</Link>
        <nav> 
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
