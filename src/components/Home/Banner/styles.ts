import styled from "styled-components";

export const BoxImageWapper = styled.div`
    width: 100%;
    min-height: 40rem;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
        height: 40rem;
        z-index: 1;
    }

    h1 {
        position: absolute;
        top: 10rem;
        left: 40rem;
        font-family: 'Open Sans';
        width: 20%;
        color: white;
    }
`;