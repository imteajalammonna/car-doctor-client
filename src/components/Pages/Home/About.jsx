import img1 from "../../../assets/images/about_us/Rectangle 4.png"
import img2 from "../../../assets/images/about_us/parts2.png"

const About = () => {
    return (
        <div className="my-28 grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
                <img className="" src={img1} alt="" />
                <img className="absolute top-[45%] left-[35%] border-white-8 rounded-lg" src={img2} alt="" />
            </div>
            <div className="space-y-14 w-11/12">
                <h4 className="text-[#FF3811] text-xl font-bold">About Us</h4>
                <h2 className="text-5xl font-bold">We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <div className="">
                    <button className="button-fill">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;