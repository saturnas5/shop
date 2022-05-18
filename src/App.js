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
          <Route exact path='/livingroom'>
              <LivingRoom/>
          </Route>
      </Switch>
    </div>
  );
}

export default () => {
    return (
        <ProductsProvider>
            <App/>
        </ProductsProvider>

    )
}
