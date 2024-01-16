import styled from "styled-components";

export const AllCarsContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 60rem;

  .all-cars {
    width: 100%;
    min-height: 50rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    .cars {
      width: 22%;
      min-height: 23rem;
      height: auto;
      min-width: 15rem;
      flex-wrap: wrap;
      box-shadow: 2px 2px 10px rgb(230, 230, 230);
      align-items: center;
      margin: auto;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      @media (max-width: 1280px) {
        min-height: 18rem;
      }

      .footer-buttons {
        width: 100%;
        height: 6rem;
        display: flex;
        justify-content: center;
        gap: 1rem;

        #buy-button {
            width: 9rem;
            margin: 1rem auto;
            padding: 1rem;
            height: 4rem;
            background-color: #dfcf24;
            border: none;
            border-radius: 3px;
        }

        #buy {
            width: 12rem;
            margin: 1rem auto;
            padding: 1rem;
            height: 4rem;
            background-color: white;
            border: 1px solid #dfcf24;;
        }
        #active {
            background-color: #dfcf24;
        }

      }

      p {
        text-align: center;
        font-size: 1rem;
      }

      .header-card {
        width: 100%;
        min-height: 4rem;
        height: auto;
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

  .header-cars {
    width: 100%;
    min-height: 10rem;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    p {
      width: 50%;
      text-align: center;
      font-family: "Open Sans";
      font-size: 1rem;
    }
  }
`;
