import { FiX, FiMenu } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useEffect, useState } from "react"


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);
        // Scroll to the corresponding section
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "about", label: 'About' },
        { id: "skills", label: 'Skills' },
        { id: "Projects", label: 'Projects' },
        { id: "education", label: 'Education' },
        { id: "contact", label: 'Contact' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#05041473] backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className="text-white py-5 flex justify-between items-center">
                {/* Logo  */}
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-[#8245ec] ">&lt;</span>
                    <span className="text-[#fff] ">Gaurav</span>
                    <span className="text-[#8245ec] ">/</span>
                    <span className="text-[#fff] ">Kumar</span>
                    <span className="text-[#8245ec] ">&gt;</span>
                </div>

                {/* Menu items  */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((item) => (
                        <li key={item.id} className={`text-xl cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'}`}>
                            <button className="cursor-pointer"
                                onClick={() => handleMenuClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Hamburger Menu  */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/eclipse-dev3"
                        target="_blank"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/me/"
                        target="_blank"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                {/* mobile menu icons */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile items  */}

            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
            bg-[#050414]/60 
            backdrop-blur-lg 
            z-50 rounded-lg shadow-lg md:hidden"
                >
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/codingmastr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}

        </nav >
    )
}
