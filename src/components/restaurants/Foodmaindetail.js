
import Cart from "../FoodCart/CartFood"
import Context from '../Context/ContextFood';
import Home from '../home/FoodHome';
import Menu from '../menu/Menu';
import Nevbar from '../Navbar/NevbarFood';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function Foodmaindetail() {
  return (
    <div>
      <Context>
      <Router>
      <Nevbar/>
     <Routes>
      <Route path='/homefood'  element={ <><Home/> <Menu/></>}/>
      <Route path='/cart'  element={<Cart/>}/>
      </Routes>
      </Router>
      </Context>
      
    </div>
  );
}

export default Foodmaindetail;



