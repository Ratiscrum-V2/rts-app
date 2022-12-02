import { Link, Outlet } from "react-router-dom";
import Logo from './images/Ratisexe-logo.png'

export default function App() {

  return <main className="flex h-full w-full flex-col overflow-hidden overscroll-none">

    <Link to={'/'} className="absolute top-5 left-5 btn btn-ghost">
      <img src={Logo} width={150}></img>
    </Link>

    <div className="justify container mx-auto py-14 flex h-full w-full flex-col items-center justify-center gap-5 align-middle">

      <Outlet />

    </div>
  </main>



}