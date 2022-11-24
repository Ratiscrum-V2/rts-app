import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
export default function App() {

  return <div className="bg-gray-100 h-screen">
    <Navbar />

    <div className="container mx-auto my-10">

      <Outlet />

    </div>
  </div>



}