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
import Loading from "../elementos/loading/Loading";

export default function Assentos(){
    //State
    const {idSessao} = useParams();
    const [informacoesSessao, setInformacoesSessao] = useState({});
    const [assentos, setAssentos] = useState([]);
    const [idsAssentos, setIdsAssentos] = useState([]);
    const [nomeComprador, setNomeComprador] = useState('');
    const [cpfComprador, setCpfComprador] = useState('');

    //Logic
    useEffect( () => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promisse
            .then( ({data}) => {
            setInformacoesSessao({nomeFilme: data.movie.title, urlFilme: data.movie.posterURL, diaFilme: data.day.weekday, horarioFilme: data.name});
            const array = data.seats.map( (seat) => {
                return {
                    ...seat,
                    isSelected: false
                }  
            })
            setAssentos([...array]);
        })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

    //UI
    return (
        <>
            <Descricao subtitulo="Selecione o(s) assento(s)" corDescricao="#293845" />
            <AreaAssentos>
                {assentos.length === 0 ? 
                <Loading /> 
                : 
                assentos.map(assento => (
                    <Assento 
                        key={assento.id} 
                        assento={assento}
                        idsAssentos={idsAssentos}
                        setIdsAssentos={setIdsAssentos}
                    />))
                }
            </AreaAssentos>
            <Legenda />
            <Form 
                assentos={assentos}
                nomeComprador={nomeComprador}
                setNomeComprador={setNomeComprador}
                cpfComprador={cpfComprador}
                setCpfComprador={setCpfComprador}
                informacoesFilme={informacoesSessao}
            />
            <Footer informacoesFilme={informacoesSessao}>
                <TituloFilme>{informacoesSessao.diaFilme} - {informacoesSessao.horarioFilme}</TituloFilme>
            </Footer>
        </>
    )
}


const AreaAssentos = styled.div`
    width: 100%;
    padding-left: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4px;
`;

