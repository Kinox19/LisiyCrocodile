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
import { AppContext, AppContextProvider } from "./AppContext";


function App() {

  return (
    
    <AppContextProvider>
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
      </Routes>
      <Footer/>
    </div>
    </AppContextProvider>
  );
}

export default App;
