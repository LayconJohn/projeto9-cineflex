import styled from 'styled-components';

const AssentoIndividual = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 11px;
    font-weight: normal;
    background-color: ${props => props.corAssento};
    border: 1px solid ${props => props.corBorda};
    margin: 5px;
    scale: 0.9;
    opacity: 0.9;
    transition: all ease 0.4s;
    cursor: pointer;    

    &:hover {
        scale: 1;
        opacity: 1;
    }

    &:active {
        transform: translate3d(1px 2px 1px);
    }

`;

export {AssentoIndividual};