import { ContainerFeaturedCars } from "./styles";

interface ICarsLayout {
    id: number;
    carName: string;
    carCategory: string;
    price: string;
}

function FeaturedCars() {

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
    ]

    return (
        <ContainerFeaturedCars>
            <h1>Carros mais vendidos</h1>

            <div className="cars-featured">
                {carsLayout.map((cars: ICarsLayout) => {
                    return (
                        <div className="cars">
                            <div className="header-card">
                                <h1>{cars.carName}</h1>
                                <h1>{cars.price}</h1>
                            </div>
                            <img src="https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_tracker/images/colorizer/tracker-premier-prata-shark.png" alt="" />
                            <p>2020 - Automatico - completo</p>
                        </div>
                    )
                })}
            </div>
        </ContainerFeaturedCars>
    )
}

export default FeaturedCars;