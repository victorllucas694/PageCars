import styled from "styled-components";

export const ContainerFeaturedCars = styled.div`
  width: 100%;
  min-height: 40rem;
  height: auto;
  background-color: rgb(250, 250, 250); 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;  


  h1 {
    font-family: 'Roboto';
    text-align: center;
  }

  .cars-featured {
    height: auto;
    gap: 1rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;


    .cars {
        width: 22%;
        min-height: 20rem;
        height: auto;
        min-width: 15rem;
        flex-wrap: wrap;
        box-shadow: 2px 2px 10px rgb(230, 230, 230);
        align-items: center;
        margin: auto;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        @media (max-width: 1280px) {
        min-height: 15rem;
      }
        p {
            text-align: center;
            font-size: 1rem;
        }

        .header-card {
            width: 100%;
            height: 4rem;
            display: flex;
            padding: 1rem;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-size: 1rem;
            }
            
            .price {
                width: 8rem;
                height: 3rem;
                border-radius: 4px;
            }
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }
  }
`;
