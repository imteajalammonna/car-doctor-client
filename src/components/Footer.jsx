import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <div className="bg-black text-white p-16 ">
            <footer className="footer container mx-auto">
                <aside>
                    <img src={logo} alt="" />
                    <p>Car Doctor Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr className="mt-14" />
            <p className="text-center text-xl mt-8 mb-0">© 2024 Car Doctor || All Rights Reserved.</p>
        </div>
    );
};

export default Footer;