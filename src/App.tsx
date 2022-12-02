import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Logo from './images/Ratisexe-logo.png'

export default function App() {
  
  axios.defaults.baseURL = "https://api.ratiscrum.tgimenez.fr";

  return <div className="h-screen">

    <Link to={'/'} className="absolute top-4 left-4 btn btn-ghost">
      <img src={Logo} width={150}></img>
    </Link>

    <div className="container mx-auto my-20">

      <Outlet />

    </div>
  </div>



}