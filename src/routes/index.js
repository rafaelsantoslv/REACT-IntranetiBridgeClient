import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import { PrivateRoute } from "./PrivateRoutes";
import Home from "../pages/Home";
import FormEmpregado from "../pages/Home";

const RoutesApp = () => {


   

    return (

        <Router>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="*" element={<Login />}/>
            <Route path="/teste" element={<Home />}/>
            <Route path="/home" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} /> 
            </Route>
            <Route path="/funcionario" element={<PrivateRoute />}>
                <Route path="/funcionario" element={<FormEmpregado />} /> 
            </Route>
        </Routes>
    </Router>

    );
};

export default RoutesApp;
