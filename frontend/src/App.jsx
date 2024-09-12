import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Router from "./pages/Router";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* div below contains container tailwindcss */}
        <div className="bg-lilac p-4">
          <Nav />
        </div>
        <Router />
        <div className="bg-olive p-0">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
