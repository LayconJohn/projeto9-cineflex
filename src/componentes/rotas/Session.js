import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Descricao from '../elementos/descricao/Descricao';
import Footer from "../elementos/footer/Footer";
import SessaoInfo from "../elementos/sessaoInfo/SessaoInfo";

export default function Session() {
    const {idFilme} = useParams()
    const [informacoesFilme, setInformacoesFilme] = useState({})
    const [dias, setDias] = useState([]);   

    //logic
    useEffect( () => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
        promisse.then( ({data}) => {
            setInformacoesFilme({nomeFilme: data.title, urlFilme:data.posterURL})
            setDias(data.days)
        }) 
    }, [])
    
    return (
        <>
        <Descricao subtitulo="Selecione o horário" corDescricao="#293845"/>
        {dias.map( dia => <SessaoInfo dia={dia}/>)}
        <Footer informacoesFilme={informacoesFilme}></Footer>
        </>
    )
}