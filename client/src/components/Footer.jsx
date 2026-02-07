
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">PK<span className="text-blue-500">.</span></h2>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} PK Portfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/Prajwalkapade123" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/prajwal-kapade-7816b0234/" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:prajwalkapade85@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
