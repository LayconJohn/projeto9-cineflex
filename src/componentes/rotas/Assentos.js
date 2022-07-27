import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from '../elementos/footer/Footer';
import { TituloFilme } from "../elementos/footer/styledFooter";

export default function Assentos(){
    const {idSessao} = useParams();
    const [informacoesSessao, setInformacoesSessao] = useState({});

    useEffect( () => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse
            .then( ({data}) => {
            console.log(data);
            setInformacoesSessao({nomeFilme: data.movie.title, urlFilme: data.movie.posterURL, diaFilme: data.day.weekday, horarioFilme: data.name});
        })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            Assentos {idSessao}
            <Footer informacoesFilme={informacoesSessao}>
                <TituloFilme>{informacoesSessao.diaFilme} - {informacoesSessao.horarioFilme}</TituloFilme>
            </Footer>
        </>
    )
}