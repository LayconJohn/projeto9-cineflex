import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Descricao from '../elementos/descricao/Descricao';
import Filme from '../elementos/filme/Filme';

export default function Home(){
    //state
    const [listaFilmes, setListaFilmes] = useState([]);

    //logic
    useEffect( () => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies")
        promisse
            .then( (response) => {
                setListaFilmes([...response.data]);
                console.log(response)
        })
            .catch( (error) => {
                console.log(error);
            })
    }, [])

    //render
    return (
        <>
            <Descricao subtitulo="Selecione o filme" corDescricao="#293845"/>
            {listaFilmes.length === 0 ? "Carregando..." :
            <AreaFilmes>
                {listaFilmes.map(filme => (
                    <Link to={`sessoes/${filme.id}`} key={filme.id}> 
                        <Filme filme={filme}/>
                    </Link>
                ))}
            </AreaFilmes>
            }
        </>
    )
}

const AreaFilmes = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-left: 15px;
`;


