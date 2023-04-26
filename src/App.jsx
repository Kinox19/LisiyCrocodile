import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Main from "./pages/main/Main";
import Oferta from "./pages/oferta/Oferta";
import { Route, Routes  } from "react-router-dom";
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
import OrderPage from "./pages/orderPage/OrderPage";
import Redirect from "react-router-dom";
import PlayerState from './shared/player/context/playerContext'


function App() {
  const store = createStore(rootReducer);
  console.log("\n\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551\u2591\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u255A\u2588\u2588\u2557\u2591\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2557\u2591\n\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2591\u255A\u2588\u2588\u2588\u2588\u2554\u255D\u2591\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u255D\u2591\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2591\u255A\u2550\u2550\u2550\u2588\u2588\u2557\n\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u255A\u2588\u2588\u2554\u255D\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591 У нас получается! Александр - https://t.me/uorix, Артём - https://t.me/kinox19")

  const savedCart = localStorage.getItem("cart");
if (savedCart) {
  const initialState = {
    cart: JSON.parse(savedCart),
  };
  store.dispatch({ type: "LOAD_CART", payload: initialState.cart });
}

  return (
    <Provider store={store}>
    <div className="App">

      <Header/>
      <Routes>
        <Route path="/oferta" element={<Oferta/>} />

        <Route path="/muz1" element={<Muz1/>} />
        <Route path="/muz2" element={<Muz2/>} />
        <Route path="/muz3" element={<Muz3/>} />
        <Route path="/muz4" element={<Muz4/>} />
        <Route path="/kachaet" element={<Player/>} />

        <Route exact path="/home" element={<Main/>} />
        <Route path="/merch" element={<Merch/>} />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>

    </div>
    </Provider>

  );
}

export default App;
