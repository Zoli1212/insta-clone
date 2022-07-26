import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './screens/Home';
import { Signin } from './screens/Signin';
import { Signup } from './screens/Signup';
import { Profile } from './screens/Profile';

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </Router>
  
    
   
  );
}

export default App;
