import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FormEmpregado from "../pages/FormEmpregado";

const Private = ({ item: Item }) => {
    const signed = true;

    return signed ? <Item /> : <Login />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Private item={Home} />} />
                <Route path="login" element={<Login />} />
                <Route path="/funcionario" element={<FormEmpregado />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;
