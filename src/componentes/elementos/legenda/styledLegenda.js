import styled from "styled-components";

const EspacoLegenda = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DescricaoLegenda = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 16px 12px;

    p {
        font-size: 13px;
        color: #4E5A65;
    }
`;

const AssentoLegenda = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background-color: ${props => props.corLegenda};
    border: 1px solid ${props => props.bordaLegenda};
`;

export {EspacoLegenda, DescricaoLegenda, AssentoLegenda};