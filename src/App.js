import './css/style.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Kitchen from "./pages/Kitchen";
import Kidsroom from "./pages/Kidsroom";
import Badroom from "./pages/Badroom/";
import Bathroom from "./pages/Bathroom";
import LivingRoom from "./pages/LivingRoom";


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/badroom' element={<Badroom/>} />
          <Route exact path='/bathroom' element={<Bathroom/>}/>
          <Route exact path='/kidsroom' element={<Kidsroom/>}/>
          <Route exact path='/kitchen' element={<Kitchen/>}/>
          <Route exact path='/livingroom' element={<LivingRoom/>}/>
      </Routes>
    </div>
  );
}

export default () => {
    return (

            <App/>

    )
}
