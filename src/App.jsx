

import { Outlet } from "react-router-dom"
import Footer from "./compounte/layout/Foter"
import Hider from "./compounte/layout/Hider"



function App() {


  return (
    <>
      <Hider />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
