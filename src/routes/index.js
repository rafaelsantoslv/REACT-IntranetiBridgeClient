import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import { PrivateRoute } from "./PrivateRoutes";
import Home from "../pages/Home";
import FormEmpregado from "../pages/FormEmpregado";

const RoutesApp = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/teste" element={<PrivateRoute />} />
          <Route path="/home/*" element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/funcionario/*" element={<PrivateRoute />}>
            <Route index element={<FormEmpregado />} />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    );
  };

export default RoutesApp;
