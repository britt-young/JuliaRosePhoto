import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Router from "./pages/Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* div below contains container tailwindcss */}
        <div className="bg-olive p-4">
          <Nav />
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
