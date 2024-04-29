import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/shop';
import Footer from './Components/Footer/footer';
import Login from './Pages/login';
import Product from './Pages/product'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import ShopCategory from './Pages/shopCategory';
import Cart from './Pages/cart';

function App() {

  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/> }/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory  banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
