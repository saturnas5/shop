import './css/style.css';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Kitchen from "./pages/Kitchen";
import Kidsroom from "./pages/Kidsroom";
import Badroom from "./pages/Badroom/";
import Bathroom from "./pages/Bathroom";
import LivingRoom from "./pages/LivingRoom";
import ProductsPage from "./pages/ProductsPage";
import {Provider as ProductsProvider} from "./context/productsContext";
import {Provider as CartProvider} from "./context/cartContext";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/'>
              <Main/>
          </Route>
          <Route exact path='/clothes' >
              <ProductsPage/>
          </Route>
          <Route exact path='/electronics'>
              <ProductsPage/>
          </Route>
          <Route exact path='/furniture'>
              <ProductsPage/>
          </Route>
          <Route exact path='/shoes'>
              <ProductsPage/>
          </Route>
          <Route exact path='/others'>
              <ProductsPage/>
          </Route>
          <Route path='/:category/:name/:id'>
              <ProductDetails/>
          </Route>
          <Route exact path='/cart'>
              <Cart/>
          </Route>
          <Route exact path='/login'>
              <Login/>
          </Route>

          <Route>
              <NotFound/>
          </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default () => {
    return (
        <CartProvider>
        <ProductsProvider>
            <App/>
        </ProductsProvider>
        </CartProvider>

    )
}
