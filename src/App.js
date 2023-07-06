import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Story from "./pages/story/Story";
import Registry from "./pages/registry/Registry";
import Rsvp from "./pages/rsvp/Rsvp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/story" element={<Story />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<Rsvp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
