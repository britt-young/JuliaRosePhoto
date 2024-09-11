import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Router from "./pages/Router";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* div below contains container tailwindcss */}
        <div className="bg-flamingo p-4">
          <Nav />
        </div>
        <Router />
        <div className="bg-flamingo p-0">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
