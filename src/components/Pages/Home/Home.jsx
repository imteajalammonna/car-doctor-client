import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Products from "./Products";
import Services from "./Services";
import Reviews from "./Reviews";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner autoPlayInterval={5000}></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;