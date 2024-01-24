import icon1 from "../../../assets/icons/001-timetable.svg"
import icon2 from "../../../assets/icons/Group 34.svg"
import icon3 from "../../../assets/icons/Group 35.svg"

const Contact = () => {
    const infos = [
        { Image: icon1, Text: "We are open monday-friday", TimeRanges: "7:00 am - 9:00 pm" },
        { Image: icon2, Text: "Have a question?", TimeRanges: "+2546 251 2658" },
        { Image: icon3, Text: "Need a repair? our address", TimeRanges: "Liza Street, New York" },
    ]
    return (
        <div className="bg-black p-10 py-16 my-10 rounded-xl grid grid-cols-1 md:grid-cols-3  text-white">
            {
                infos.map(info => <div key={info.Text} className="flex items-center space-x-8">
                    <div>
                        <img src={info.Image} alt="Image" />
                    </div>
                    <div className="">
                        <h3 className="text-2xl">{info.Text}</h3>
                        <h3 className="">{info.TimeRanges}</h3>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Contact;