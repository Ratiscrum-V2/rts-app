import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
export default function App() {

  return <div>
    <Navbar />

    <div className="container mx-auto py-5">

      <Outlet />

    </div>
  </div>



}