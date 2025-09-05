import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(

    <>
    <Route path="/" element={<>
        <Navbar/>
        
    <h1> the home page</h1> 
  <Outlet />
       </>}>

      <Route path="/about" element={<div>hello mojjjmen </div>} />
      <Route path="contact" element={<>hello contact  </>} />
      <Route path="momen" element={<>hello mojjjmen </>} />
  


    </Route>


     


    
    
    
    </>
)
);
export default router