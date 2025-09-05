
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RoutElement = () => {
  return (
    <div>
 <Navbar/>
  <Outlet />
    </div>
  )
}

export default RoutElement
