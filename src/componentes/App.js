import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../assets/reset.css';

import Topo from "./elementos/topo/Topo";
import Assentos from "./rotas/Assentos";
import Home from "./rotas/Home";
import Session from "./rotas/Session";
import Sucesso from "./rotas/Sucesso";

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Topo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Session />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}