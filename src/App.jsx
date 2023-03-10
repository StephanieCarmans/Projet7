//import du style à la racine
import "./sass/main.scss";

import * as React from "react";
//import des éléments permettant de mettre l'architecture route du site sur une page
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Product from "./pages/Product";

//imports composants du layout communs à chacune des pages
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
      return (
            <BrowserRouter>
                  <Header />

                  <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="products/:id" element={<Product />} />
                        <Route path="*" element={<Notfound />} />
                  </Routes>

                  <Footer />
            </BrowserRouter>
      );
}

export default App;
