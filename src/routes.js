import Cadastro from "./components/Pages/Cadastro";
import Home from "./components/Pages/Home";
import PrivateRoute from "./PrivateRoute";
const { BrowserRouter, Route, Routes } = require("react-router-dom");
const { default: Login } = require("./components/Pages/Login");

function AppRoutes () {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route> 
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/" element={<PrivateRoute />}></Route>
          </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;