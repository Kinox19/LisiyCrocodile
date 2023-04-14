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


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/main" element={<Main/>} />
        <Route path="/oferta" element={<Oferta/>} />
        <Route path="/muz1" element={<Muz1/>} />
        <Route path="/muz2" element={<Muz2/>} />
        <Route path="/muz3" element={<Muz3/>} />
        <Route path="/muz4" element={<Muz4/>} />
        <Route path="/merch" element={<Merch/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
