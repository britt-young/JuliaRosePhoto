import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen rose-background">
      {/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;