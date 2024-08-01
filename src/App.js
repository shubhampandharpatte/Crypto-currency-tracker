import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CoinSearch from "./components/CoinSearch/CoinSearch";
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {

  return (
   <>
    <Navbar />
    <CoinSearch />
    <Footer />
   </>
  );
}

export default App;