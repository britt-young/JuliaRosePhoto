import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Seniors from "./pages/Seniors";
import Couples from "./pages/Couples";
import Solo from "./pages/Solo";
import Families from "./pages/Families";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Error from "./Components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // parent path
      <Route path="/" element={<RootLayout />}>
        {/* child routes */}
        <Route index element={<Home />} />
        <Route path="Services" element={<Services />} />
         {/* nested (additional children) routes too */}
        <Route path="Services/seniors" element={<Seniors />} />
        <Route path="Services/couples&groups" element={<Couples />} />
        <Route path="Services/solo" element={<Solo />} />
        <Route path="Services/families" element={<Families />} />
        <Route path="Services/events" element={<Events />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Privacy" element={<Privacy />} />
       
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
