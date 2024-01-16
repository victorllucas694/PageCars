import styled from "styled-components";

export const ContainerMoreSeller = styled.div`
    width: 100%;
    min-height: 40rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    


    .body-section {
        width: 50%;
        height: 40rem;
        min-width: 30rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem;
        flex-direction: column;
        gap: 2.5rem;

        @media(max-width: 1280px) {
            width: 100%;
        }   

        p {
            font-size: 1.3rem;
            width: 80%;
        }

        h1 {
            font-size: 2rem;
            width: 80%;
            text-align: left;
        }
        
    }

    .image-car {
        width: 50%;
        min-width: 30rem;
        height: 40rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(max-width: 1280px) {
            width: 100%;
        }  
        
        img {
            max-width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
    
`;