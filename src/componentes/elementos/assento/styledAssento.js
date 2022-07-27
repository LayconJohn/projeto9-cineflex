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
    background-color: ${props => props.disponivel ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.disponivel ? "#808F9D" : "#F7C52B"};
    margin: 8px;
`;

export {AssentoIndividual};