import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../assets/reset.css';

import Topo from "./elementos/topo/Topo";
import Assentos from "./rotas/Assentos";
import Home from "./rotas/Home";
import Session from "./rotas/Session";
import Sucesso from "./rotas/Sucesso";

export default function App() {
    const rota = ["/", "/sessoes/:idFilme", "/assentos/:idSessao", "/sucesso"]
    return (
        <>
        <BrowserRouter>
        <Topo />
            <Routes>
                <Route path={rota[0]} element={<Home />} />
                <Route path={rota[1]} element={<Session />} />
                <Route path={rota[2]} element={<Assentos />} />
                <Route path={rota[3]} element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}