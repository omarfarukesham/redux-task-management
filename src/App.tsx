import { Outlet } from "react-router"
import Navbar from "./pages/nav/navbar"

export default function App() {
  return (
   <>
    <Navbar />
    <Outlet />
   </>
  )
}
