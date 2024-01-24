import img from "../../assets/images/404.png"
import Footer from "../Footer";
import Header from "../Header";

const Error = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex items-center justify-center">
                <img src={img} alt="404" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;