import styled from 'styled-components';

const PosterFilme = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0px 30px;

    img {
        width: 129px;
        height: 193px;
        scale: 0.9;
        transition: all ease 0.6s;
    }

    img:hover {
        scale: 1;
    }

    img:active {
        transform: translate3d(1px, 1px, 1px);
    }
`;

export {PosterFilme};