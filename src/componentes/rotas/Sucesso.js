import {Link} from "react-router-dom"
import styled from "styled-components"


import { BotaoForm } from "../elementos/forms/styledForm";
import Descricao from "../elementos/descricao/Descricao";

function DetalhesPedido({tituloDetalhe, children}) {
    return(
        <AreaDetalhe>
            <h5>{tituloDetalhe}</h5>
            {children}
        </AreaDetalhe>
    )
}

export default function Sucesso(){
    return (
        <>
            <Descricao subtitulo="Pedido Realizado com sucesso!" corDescricao="#247A6B"/>
            <DetalhesPedido tituloDetalhe="Filme e Sessão">
                <p>Enola Holmes</p>
                <p>24/07/2022 - 15:00</p> 
            </DetalhesPedido>
            <DetalhesPedido tituloDetalhe="Ingressos">
                <p>Assento 15</p>
                <p>Assento 16</p> 
            </DetalhesPedido>
            <DetalhesPedido tituloDetalhe="Comprador">
                <p>Nome: Osvaldo </p>
                <p>CPF: 1234</p> 
            </DetalhesPedido>
            <EspacoBotao>
            <Link to="/">
                <BotaoForm>Voltar para a Home</BotaoForm> 
            </Link>
            </EspacoBotao>
        </>
    )
}

const EspacoBotao = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AreaDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #293845;
    margin-left: 22px;
    margin-bottom: 30px;

    h5 {
        font-size: 24px;
        font-weight: 700;
    }

    p {
        font-size: 22px;
        font-weight: 400;
    }
`;