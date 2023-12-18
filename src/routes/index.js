import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
// import FormEmpregado from "../pages/FormEmpregado";

const Private = ({ item: Item }) => {
    const signed = true;

    return signed ? <Item /> : <Login />;
};

const RoutesApp = () => {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Private item={Home} />} />
        //         <Route path="login" element={<Login />} />
        //         <Route path="/funcionario" element={<FormEmpregado />} />
        //         <Route path="*" element={<Login />} />
        //     </Routes>
        // </BrowserRouter>

        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>

    );
};

export default RoutesApp;
