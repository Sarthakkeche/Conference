import { useRoutes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Registration from "./Components/Registration";
import Imp from "./Components/Imp";
import ContactUs  from "./Components/Contact";
import Venue from "./Components/Venue";
import Committe from "./Components/Comitee";


const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About/> },
    { path: "/Registration", element: <Registration/> },
    {path:"/Imp",element:<Imp/>},
    {path:"/Contact",element:<ContactUs/>},
    { path:"/Venue",element:<Venue/>},
    { path:"/comitee",element:<Committe/> },

  ]);
};

export default RoutesConfig;

