
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/50 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
                        Portfolio<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-blue-400 ${location.pathname === link.path
                                        ? "text-blue-500"
                                        : "text-gray-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-base font-medium transition-colors hover:text-blue-400 ${location.pathname === link.path
                                            ? "text-blue-500"
                                            : "text-gray-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
