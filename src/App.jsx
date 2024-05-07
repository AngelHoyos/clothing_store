import { useRoutes } from "react-router-dom"
import { Home } from "./components/Pages/Home/Home"
import { Helps } from "./components/Pages/Helps/Helps";
import { Car } from "./components/Pages/Car/Car";
import { NotFound } from "./components/NotFound/NotFound";
import { NavBar } from "./components/NavBar/NavBar";
import { LinkOfList } from "./components/LinkOfList/LinkOfList";
import { Header } from "./components/Layouts/Header/Header";
import { Footer } from "./components/Layouts/Footer/Footer";

const AppRoutes=()=>{
  let router= useRoutes([
    {path:'/Home', element:<Home />},
    {path:'/Helps', element:<Helps />},
    {path:'/Car', element:<Car />},
    {path:'*', element:<NotFound />}
  
  ])
  return router
}

function App() {
  return (
<>
<NavBar>
<LinkOfList content="Home"routes='/Home'/>
<LinkOfList content="Helps" routes="/Helps"/>
<LinkOfList content="Car" routes="/Car"/>
</NavBar>
<AppRoutes />
<Footer/>

</>
  )
}

export default App
