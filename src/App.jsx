import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Main from "./pages/main/Main";
import Oferta from "./pages/oferta/Oferta";
import { Route, Routes } from "react-router-dom";
import Muz1 from "./pages/muz1/Muz1";
import Muz2 from "./pages/muz2/Muz2";
import Muz3 from "./pages/muz3/Muz3";
import Muz4 from "./pages/muz4/Muz4";
import Merch from "./pages/merch/Merch";
import Player from "./shared/player/Player";
import Cart from "./pages/cart/Cart";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import rootReducer from "./redux/reducers/reducers";
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";

// import {persistor} from '../src/redux/store/store'



function App() {

  const store = createStore(rootReducer);

  return (
    
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <div className="App">
      <Header/>
      <Routes>
      
        <Route path="/oferta" element={<Oferta/>} />
        <Route path="/muz1" element={<Muz1/>} />
        <Route path="/muz2" element={<Muz2/>} />
        <Route path="/muz3" element={<Muz3/>} />
        <Route path="/muz4" element={<Muz4/>} />
        
        <Route exact path="/home" element={<Main/>} />
        <Route path="/merch" element={<Merch/>} />
        
        <Route path="/kachaet" element={<Player/>} />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </div>
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
