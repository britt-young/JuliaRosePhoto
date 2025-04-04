import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Error from './Components/Error'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    // parent path
    <Route path='/' element={<RootLayout />}> 
    {/* child routes */}
      <Route index element={<Home />} />
      <Route path ='Services' element={<Services />} />
      <Route path ='Gallery' element={<Gallery />} />
      <Route path ='Contact' element={<Contact />} />
      <Route path ='Privacy' element={<Privacy />} />
      {/* Can add nested (additional children) routes too */}
      <Route path ='*' element={<Error />} />
    </Route>
    
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App