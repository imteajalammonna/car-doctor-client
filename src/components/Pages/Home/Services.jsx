import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Title from "../../Title";
import Button from "../../Button";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="space-y-8 my-20 m-5 md:m-0">
            <Title miniTitle="Service" title="Our Service Area"></Title>
            <div className="my-28 grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map(service =>
                    <div className=" p-4 rounded-lg" style={{ border: '1px solid var(--Dark-06, #E8E8E8)' }} key={service._id}>
                        <img className=" rounded-lg" src={service.img} alt="Image" />
                        <div className="space-y-4 mt-5 flex justify-between items-center">
                            <div className="">
                                <h2 className="text-2xl font-bold">{service.title}</h2>
                                <p className="text-xl font-bold text-[#FF3811]">${service.price}</p>
                            </div>
                            <div className="text-[#FF3811] text-2xl cursor-pointer">
                                <HiArrowRight></HiArrowRight>
                            </div>
                        </div>
                    </div>)}
            </div>
            <div className="flex items-center justify-center">
                <Button name="More Services" border="border"></Button>
            </div>
        </div>
    );
};

export default Services;