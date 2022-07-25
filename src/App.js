
import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Test1 from './test1';
import Home from './home';
import Anime from './anime';
function App() {
  return (
<BrowserRouter> 
<ul className=''>
 <a className='vv'>Ali</a> 
   <li><a href="/anime">Anime</a></li>
  <li><a href="/test1">Movies</a></li>
 <li><a  href="/home">Home</a></li>
</ul> 
<Routes>

<Route path='/' element ={ <Home/> } />
<Route path='/home' element ={ <Home/> } />
<Route path='/anime' element ={ <Anime/> } />
<Route path='/test1' element ={ <Test1/> } />
</Routes>
   </BrowserRouter>
  );
}

export default App;
