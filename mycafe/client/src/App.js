//router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
//common page
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
//Navbar 
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
//Css
import './style/style.scss';
const Layout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      path: "/",
      element:<Home/>,
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router ={router}/>
      </div>
    </div>
  );
}

export default App;
