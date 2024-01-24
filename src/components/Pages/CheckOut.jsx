import { useState } from "react";
import Bf from "../../assets/images/checkout/im.png";


const CheckOut = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleConfirmOrder = () => {
        // You can handle the order confirmation logic here
        // For now, let's log the input values to the console
        console.log('Order Confirmed:', { firstName, lastName, email, phone, message });
    };
    const BG = `url(${Bf})`;
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <div className="rounded-xl w-[1200px] h-[350px] bg-no-repeat" style={{ backgroundImage: BG }}>
            </div>
            <div className="container mx-auto p-8 bg-gray-200 my-20">
                <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="mb-4">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="border rounded w-full py-2 px-3"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="border rounded w-full py-2 px-3"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border rounded w-full py-2 px-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="border rounded w-full py-2 px-3"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            className="border rounded w-full py-2 px-3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleConfirmOrder}
                >
                    Confirm Order
                </button>
            </div>

        </div>
    );
};

export default CheckOut;