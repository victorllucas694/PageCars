import Header from "../components/Global/Header";
import Banner from "../components/Home/Banner";
import FeaturedCars from "../components/Home/FeaturedCars";
import MoreSeller from "../components/Home/MoreSeller";
import SearchPanel from "../components/Home/SearchPanel";

function Home(){
    return (
        <>
            <Header />
            <Banner />
            <SearchPanel />
            <FeaturedCars />
            <MoreSeller />
        </>
    )
}

export default Home;