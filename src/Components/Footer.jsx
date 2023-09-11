import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {

    return ( 
        <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-6 py-8 px-4">
                <div>
                    <h1 className="font-bold text-lg pt-2"> Solutions</h1>
                    <ul>
                        <li className="py-2">Travel</li>
                        <li className="py-2">Booking</li>
                        <li className="py-2">Flights</li>
                        <li className="py-2">Cruises</li>
                        <li className="py-2">Ground</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg pt-2"> Support</h1>
                    <ul>
                        <li className="py-2">Pricing</li>
                        <li className="py-2">Documentation</li>
                        <li className="py-2">Tours</li>
                        <li className="py-2">Refunds</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg pt-2"> Company</h1>
                    <ul>
                        <li className="py-2">About</li>
                        <li className="py-2">Blog</li>
                        <li className="py-2">Jobs</li>
                        <li className="py-2">Press</li>
                        <li className="py-2">Partners</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg pt-2"> Legal</h1>
                    <ul>
                        <li className="py-2">Claims</li>
                        <li className="py-2">Privacy</li>
                        <li className="py-2">Terms</li>
                        <li className="py-2">Policies</li>
                        <li className="py-2">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 py-8 md:pt-2">
                    <h1 className="font-bold"> Subscribe to our newsletter</h1>
                <p className="py-4"> The lastet deal article send to your inbox monthly</p>
                <form className="flex flex-col sm:flex-row">
                    <input className="p-2 mb-4 rounded-md" type="email" placeholder="Enter Email..." />
                    <button className="hover:bg-gray-800 mr-2 font-serif md:pt-1 mb-4 ml-3 ">
                        Subscribe</button>
                </form>
                </div>
            </div>
            <div className="flex flex-col py-4 px-6 mx-auto md:flex-row md:justify-between">
                <p className="pb-4 text-center">2022 Experience, LLC. Alrights reserved</p>
                <div className="flex justify-between">
                    <FaFacebook className="mx-1" size={20} />
                    <FaInstagram className="mx-1" size={20} />
                    <FaTwitter className="mx-1" size={20} />
                    <TiSocialPinterest className="mx-1" size={20} />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;