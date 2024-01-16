import styled from "styled-components";

export const HeaderBoxWrapper = styled.div`
  width: 100%;
  height: 8rem;
  border: 1px solid;
  display: flex;
  justify-content: space-between;

  .brand {
    width: 20%;
    height: 8rem;
    min-width: 10rem;
    background-color: #dfcf24;

    @media(max-width: 1280px) {
      display: none;
    }
  }

  .header-options {
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 3rem;
    background-color: rgb(70, 70, 70);
    @media(max-width: 1280px) {
      width: 100%;
    }
  }

  .container {
    width: 80%;
    height: 8rem;
    @media(max-width: 1280px) {
      width: 100%;
    }
    .header-options {
      width: 100%;
      background-color: white;
      height: 5rem;

      .body-options {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 5rem;
        border: 1px solid rgb(230, 230, 230);

        .items {
          width: 70%;
          height: 100%;
          display: flex;
          height: 5rem;

          .item {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            cursor: pointer;

            &:hover {
                border-bottom: 4px solid #dfcf24;
                transition: .2s;
            }

            p {
              font-size: .9rem;
              font-family: "Open Sans";
              letter-spacing: 1px;
              font-weight: 600;
              color: rgb(120, 120, 120);
            }
          }
        }

        .button {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 5rem;

          #button-login {
            width: 70%;
            margin: auto;
            height: 3.5rem;
            border: none;    
            background-color: #dfcf24;
          }
        }
      }
    }
  }

  .top-header {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 3rem;
    background-color: rgb(70, 70, 70);

    .offer {
      min-width: 20rem;
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      h1 {
        font-size: 0.8rem;
        font-family: "Open Sans";
        color: white;
        letter-spacing: 1px;
      }
    }

    .contact {
      min-width: 35rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      h1 {
        font-size: 0.8rem;
        font-family: "Open Sans";
        color: white;
        letter-spacing: 1px;
      }
    }
  }
`;
