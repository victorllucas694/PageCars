import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import Banner from "../components/Home/Banner";
import FeaturedCars from "../components/Home/FeaturedCars";
import LaunchesCars from "../components/Home/LaunchesCars";
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
            <LaunchesCars />
            <Footer />
        </>
    )
}

export default Home;