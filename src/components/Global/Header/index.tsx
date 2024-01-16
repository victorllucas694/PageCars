import { HeaderBoxWrapper } from "./styles";

interface IHeaderBody {
  id: number;
  label: string;
}

function Header() {
  const headerBody: IHeaderBody[] = [
    {
      id: 0,
      label: "Home",
    },
    {
      id: 1,
      label: "Veiculos",
    },
    {
      id: 2,
      label: "Quem somos",
    },
    {
      id: 3,
      label: "Contato",
    },
  ];

  return (
    <HeaderBoxWrapper>
      <div className="brand"></div>
      <div className="container">
        <div className="top-header">
          <div className="offer">
            <h1>Fazer orçamento com 40% off</h1>
          </div>

          <div className="contact">
            <h1>Código da sorte: M16AR15</h1>
          </div>
        </div>

        <div className="header-options">
          <div className="body-options">
            <div className="items">
              {headerBody.map((items: IHeaderBody) => {
                return (
                  <div className="item">
                    <p>{items.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="button">
                <button id="button-login"></button>
            </div>
          </div>
        </div>
      </div>
    </HeaderBoxWrapper>
  );
}

export default Header;
