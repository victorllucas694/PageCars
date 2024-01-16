import { ContainerMoreSeller } from "./styled";

function MoreSeller() {
    return (
        <ContainerMoreSeller>
            <div className="image-car">
               <img src="https://cdn.autopapo.com.br/box/uploads/2019/03/06114627/hyundai_creta_attitude_pcd_branco_polar-e1512581620570.jpg" alt="" />
            </div>

            <div className="body-section">
                <p>Os SUV's mais vendidos no mercado brasileiro</p>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae porro accusantium</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente dolorum amet repellendus natus ducimus sed temporibus, fuga perferendis asperiores distinctio, perspiciatis, facere nostrum sint vero! Officiis dicta amet iste.</p>
                <button id="more-seller"></button>
            </div>
        </ContainerMoreSeller>
    )
}

export default MoreSeller;