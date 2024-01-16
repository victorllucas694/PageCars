import { AllCarsContainerWrapper } from "./styles";

interface ICarsLayout {
    id: number;
    carName: string;
    carCategory: string;
    price: string;
}

function LaunchesCars() {

    const carsLayout: ICarsLayout[] = [
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
        {
            id: 0,
            carName: 'Chevrolet Tracker AT',
            carCategory: 'SUV',
            price: '119.900',
        },
    ]

    return (
        <AllCarsContainerWrapper>
            <div className="header-cars">
                <h1>Lançamentos direto da concessionária</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque iusto molestiae unde neque deserunt placeat error harum itaque asperiores, explicabo cupiditate consequatur accusamus, ea earum ducimus laborum blanditiis odit?</p>
            </div>
            <div className="all-cars">
            {carsLayout.map((cars: ICarsLayout) => {
                   return (
                       <div className="cars">
                           <div className="header-card">
                               <h1>{cars.carName}</h1>
                               <h1>{cars.price}</h1>
                           </div>
                           <img src="https://renegade.jeep.com.br/content/dam/jeep/products/611/1jg/1/2024/page/hero.webp" alt="" />
                           <p>2020 - Automatico - completo</p>
                           <div className="footer-buttons">
                                <div className="buttons">
                                    <button id="buy-button"></button>
                                </div>
                                <div className="buttons">
                                    <button id="buy"></button>
                                </div>
                           </div>
                       </div>
                   )
               })} 

            </div>
        </AllCarsContainerWrapper>
    )
}

export default LaunchesCars;