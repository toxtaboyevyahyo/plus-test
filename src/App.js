import "./App.css";

import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Hero from "./pages/Hero";
import Customer from "./pages/Customer";
import Section from "./pages/Section";
import Services from "./pages/Services";
import Intro from "./pages/Intro";
import Updates from "./pages/Updates";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex">
          <NavLink to="/Header">Header</NavLink>
          < NavLink to="/Main">Main</ NavLink>
          < NavLink to="/Hero">Hero</ NavLink>
          < NavLink to="/Customer">Customer</ NavLink>
          < NavLink to="/Section">Section</ NavLink>
          < NavLink to="/Services">Services</ NavLink>
          < NavLink to="/Intro">Intro</ NavLink>
          < NavLink to="/Updates">Updates</ NavLink>
          < NavLink to="/Footer">Footer</ NavLink>


        </div>
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Section" element={<Section />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
