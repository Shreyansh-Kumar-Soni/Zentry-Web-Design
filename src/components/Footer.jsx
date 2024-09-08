import {FaDiscord, FaTwitter, FaYoutube, FaMedium} from "react-icons/fa";

const socialLinks = [
    {href: "https://discord.com", icon: <FaDiscord/>},
    {href: "https://twitter.com", icon: <FaTwitter/>},
    {href: "https://youtube.com", icon: <FaYoutube/>},
    {href: "https://medium.com", icon: <FaMedium/>},
];

const expItems = ["Home", "Prologue", "About", "Contact"]
const products = ["Radiant", "Nexus", "Zigma", "Azul"]
const followUs = ["Discord", "X", "Youtube", "Medium"]
const resources = ["Media Kit"]

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-black">
            <div className="w-full overflow-hidden py-2 text-center">
                <div className="fill-screen-text mx-auto inline-block text-center">
                    {/*font-size: 664.357px; transform: matrix3d(0.998831, 0.00653189, 0, -0.000049029, -0.0035477, 0.980175, 0, -0.000008774, 0, 0, 1, 0, -7.54388, -2.79695, 0, 1);*/}
                    zentry
                </div>
            </div>

            <div className="flex w-full items-center md:flex-row md:justify-evenly px-4 gap-6 md:gap-0">
                {/* Logo - centered on mobile, first item on desktop */}
                <div className="md:flex-1 md:max-w-[20%] flex justify-center">
                    <img src="icon.png" className="w-24"/>
                </div>

                {/* Menu items with equal distribution */}
                <div className="flex flex-1 flex-col md:flex-row justify-evenly items-center gap-6 md:gap-0 w-full">
                    <div className={"flex justify-evenly items-center gap-6 md:gap-0 w-full"}>
                        <div className="text-center md:flex-1">Explore</div>
                        <div className="text-center md:flex-1">Products</div>
                    </div>
                    <div className={"flex justify-evenly items-center gap-6 md:gap-0 w-full"}>
                        <div className="text-center md:flex-1">Follow us</div>
                        <div className="text-center md:flex-1">Resources</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Zentry 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4  md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
