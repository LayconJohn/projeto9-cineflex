import { useState, useEffect } from 'react';

import {Header, Logo, BotaoVoltar} from './styledTopo';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export default function Topo( ){

    function voltarRota() {
        
    }

    return (
        <Header>
            <BotaoVoltar> <BsFillArrowLeftCircleFill color='#E8833A'  /> </BotaoVoltar>
            <Logo>CINEFLEX</Logo>
        </Header>
    )
}