import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Logo from './images/Ratisexe-logo.png'

export default function App() {

  axios.defaults.baseURL = "https://api.ratiscrum.tgimenez.fr";

  return <main className="flex h-full w-full flex-col overflow-hidden overscroll-none">

    <Link to={'/'} className="absolute top-5 left-5 btn btn-ghost">
      <img src={Logo} className="w-24 md:w-34"></img>
    </Link>

    <div className="justify container mx-auto py-4 md:py-8 flex h-full w-full flex-col items-center justify-center gap-5 align-middle overflow-y-auto overflow-x-hidden">

      <Outlet />

    </div>
  </main>



}