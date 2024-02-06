import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Aboutdetail from "./components/Userdetail/Aboutdetail";
import Foodmaindetail from './components/restaurants/Foodmaindetail';
import Createuseform from './components/Usecurd/Createuserform';
import Updatedata from './components/Usecurd/Updatedata';
import Readuserdata from './components/Usecurd/Readuserdata';
import Context from './components/Context/ContextFood';
import FoodHome from './components/home/FoodHome';
import NevbarFood from './components/Navbar/NevbarFood';
import Menu from './components/menu/Menu';
import CartFood from './components/FoodCart/CartFood';
import ReadTableCom from './components/Usecurd/ReadTableCom';
import Registeruppage from './components/Register/Registeruppage';


function App() {
  return (
    <>
      <Context>
        <Routes>
          <Route path='/login' element={<Registeruppage />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path="/aboutdetail" element={<Aboutdetail />} />
          <Route path='/homefood' element={<>  <FoodHome /> <Menu /></>} />
          <Route path='/cart' element={<CartFood />} />
          <Route path='/Foodmaindetail' element={<Foodmaindetail />} />
          <Route path="/users" element={<Createuseform />} />
          <Route path="/update" element={<Updatedata />} />
          <Route path="/read"  element={<Readuserdata/>}/>
          <Route path="/read" element={<ReadTableCom />} />
        </Routes>
      </Context>


    </>
  );
}

export default App;
