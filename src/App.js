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


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/'>
              <Main/>
          </Route>
          <Route exact path='/badroom' params={{section: 'badroom'}} >
              <ProductsPage/>
          </Route>
          <Route exact path='/bathroom'>
              <Bathroom/>
          </Route>
          <Route exact path='/kidsroom'>
              <Kidsroom/>
          </Route>
          <Route exact path='/kitchen'>
              <Kitchen/>
          </Route>
          <Route exact path='/livingroom' params={{section: 'livingroom'}}>
              <ProductsPage/>
          </Route>
          <Route path='/:category/:name/:id'>
              <ProductDetails/>
          </Route>
          <Route exact path='/cart'>
              <Cart/>
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
