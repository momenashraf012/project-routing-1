import {  NavLink } from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className=" max-w-sm mx-auto my-7 ">
        <ul className="flex items-center justify-between">
            <li className="text-2xl "><NavLink to="/">Home </NavLink></li>
            <li className="text-2xl "  ><NavLink to="/about">about</NavLink></li>
            <li className="text-2xl "><NavLink to="/contact">contact</NavLink></li>
            <li className="text-2xl "><NavLink to="/Learn">Learn</NavLink></li>

        </ul>
    
    </nav>
   
  )
}

export default Navbar