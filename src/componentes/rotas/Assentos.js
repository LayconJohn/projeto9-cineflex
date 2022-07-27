import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Footer from '../elementos/footer/Footer';
import { TituloFilme } from "../elementos/footer/styledFooter";
import Descricao from "../elementos/descricao/Descricao";
import Assento from "../elementos/assento/Assento";
import Form from "../elementos/forms/Form";
import Legenda from "../elementos/legenda/Legenda";

export default function Assentos(){
    const {idSessao} = useParams();
    const [informacoesSessao, setInformacoesSessao] = useState({});
    const [assentos, setAssentos] = useState([]);

    useEffect( () => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse
            .then( ({data}) => {
            console.log(data);
            setAssentos(data.seats)
            setInformacoesSessao({nomeFilme: data.movie.title, urlFilme: data.movie.posterURL, diaFilme: data.day.weekday, horarioFilme: data.name});
        })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <Descricao subtitulo="Selecione o(s) assento(s)" />
            <AreaAssentos>
                {assentos.map(assento => <Assento assento={assento}/>)}
            </AreaAssentos>
            <Legenda />
            <Form />
            <Footer informacoesFilme={informacoesSessao}>
                <TituloFilme>{informacoesSessao.diaFilme} - {informacoesSessao.horarioFilme}</TituloFilme>
            </Footer>
        </>
    )
}


const AreaAssentos = styled.div`
    width: 100%;
    padding-left: 16px;
    display: flex;
    flex-wrap: wrap;
`;

