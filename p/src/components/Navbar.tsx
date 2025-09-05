import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav className=" max-w-sm mx-auto my-7 ">
        <ul className="flex items-center justify-between">
            <li className="text-2xl "  ><Link to="/about">about</Link></li>
            <li className="text-2xl "><Link to="/contact">contact</Link></li>
            <li className="text-2xl "><Link to="/momen">momen</Link></li>
        </ul>
    
    </nav>
   
  )
}

export default Navbar