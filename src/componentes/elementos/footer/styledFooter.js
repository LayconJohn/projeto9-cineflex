import styled from 'styled-components';

const EspacoFooter = styled.footer`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
`;

const PosterFooter = styled.div`
    width: 64px;
    height: 89px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-left: 10px;

    img {
        width: 48px;
        height: 72px;
        scale: 0.95;
        transition: all ease 0.8s;
    }

    img:hover {
        scale: 1;
    }
`;

const TituloFilme = styled.h4`
    font-size: 26px;
    font-weight: 400;
    color: #293845;
`;

export {EspacoFooter, PosterFooter, TituloFilme};