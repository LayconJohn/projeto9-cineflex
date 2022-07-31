import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Logo = styled.h1`
    font-size: 34px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #E8833A;

`;

const BotaoVoltar = styled.div`
    position: absolute;
    left: 15px;
    top: 28px;
    scale: 0.9;
    transition: all ease 0.6s;

    &:hover {
        transform: scale(1);
    }

    &:active {
        transform: translateY(3px);
    }
`;

export {Header, Logo, BotaoVoltar};