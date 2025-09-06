
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <aside>
       <nav className=" p-2 my-7 ">
        <ul className="flex flex-col">
            <li className="text-2xl "><NavLink end to="/Learn">Quick Start </NavLink></li>
            <li className="text-2xl "  ><NavLink to="/Learn/Thinking">Thinking in React</NavLink></li>
            <li className="text-2xl "><NavLink to="/Learn/Installation">Installation</NavLink></li>
         
        </ul>
    
    </nav>
    </aside>
  )
}

export default Aside
