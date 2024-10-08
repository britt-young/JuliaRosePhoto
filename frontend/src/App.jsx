import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Router from "./pages/Router";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-pale flex flex-col min-h-screen">
      <BrowserRouter>
        {/* div below contains container tailwindcss */}
        <div className="bg-pink-300 p-4">
          <Nav />
        </div>
        {/* main content should take up remaining space */}
        <div className="flex-grow">
          <Router />
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
