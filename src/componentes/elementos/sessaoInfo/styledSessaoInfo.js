import styled from 'styled-components';

const DetalheSessao = styled.div`
    margin-left: 24px;
`;

const DiaSessao = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #293845;
    margin: 22px 0px;
`;

const Horarios = styled.div`
    display: flex;
`

const Horario = styled.div`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    color: #FFFFFF;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    scale: 0.95;
    transition: all ease 0.7s;
    margin-right: 8px;
    cursor: pointer;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: translate3d(1px, 2px, 1px);
    }
`;

export {DetalheSessao, DiaSessao, Horarios, Horario};