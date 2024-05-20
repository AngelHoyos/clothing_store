import { useRoutes } from "react-router-dom"
import { Home } from "./components/Pages/Home/Home"
import { Helps } from "./components/Pages/Helps/Helps";
import { Car } from "./components/Pages/Car/Car";
import { NotFound } from "./components/NotFound/NotFound";
import { NavBar } from "./components/NavBar/NavBar";
import { LinkOfList } from "./components/LinkOfList/LinkOfList";
import { Footer } from "./components/Layouts/Footer/Footer";
import {Products} from "./components/Pages/Products/Products";

const AppRoutes=()=>{
  let router= useRoutes([
    {path:'/', element:<Home />},
    {path:'/Helps', element:<Helps />},
    {path:'/Car', element:<Car />},
    {path:"/Products", element: <Products />}
  
  ])
  return router
}

function App() {
  return (
<>
<NavBar>
<LinkOfList content="Home"routes='/'/>
<LinkOfList content="Helps" routes="/Helps"/>
<LinkOfList content="Car" routes="/Car"/>
<LinkOfList content="Products" routes="/Products"/>
</NavBar>
<AppRoutes />
<Footer/>

</>
  )
}

export default App
