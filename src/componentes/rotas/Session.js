import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Descricao from '../elementos/descricao/Descricao';
import Footer from "../elementos/footer/Footer";

export default function Session() {
    const {idFilme} = useParams()
    const [informacoesFilme, setInformacoesFilme] = useState({})

    //logic
    useEffect( () => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promisse.then( ({data}) => {
            console.log(data)
            setInformacoesFilme({nomeFilme: data.title, urlFilme:data.posterURL})
        }) 
    }, [])
    
    return (
        <>
        <Descricao subtitulo="Selecione o horário"/>
            Filme {idFilme}
        <Footer informacoesFilme={informacoesFilme}/>
        </>
    )
}