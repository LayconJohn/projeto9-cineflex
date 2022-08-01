import styled from 'styled-components';

const AreaForms = styled.div`
    margin-left: 24px;
    box-sizing: border-box;
    margin-bottom: 100px;
`

const TituloForm = styled.h5`
    font-size: 24px;
    color: #293845;
    font-weight: 400;
    margin-top: 7px;    
`;

const InputForm = styled.input`
    width: 327px;
    height: 51px;
    color: rgba(0, 0, 0, 0.9);
    border-radius: 3px;
    border: 1px solid #D4D4D4;
    padding-left: 18px;
    opacity: 1;
`;

const BotaoForm = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 89px;
`;

export {TituloForm, InputForm, BotaoForm, AreaForms};