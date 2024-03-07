## React Router v6 setup

```javaScript
// in App component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './user/pages/Home';
import About from './user/pages/About';
import Error from './user/pages/Error';

function App() {

  return (
    <Router>
      <header>
        <nav>
          <Home to='/'>Home</Home>
          <Link to='/about'>About</Link>
        </nav>
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;


```