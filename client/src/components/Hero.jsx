
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] sm:w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] sm:w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[40%] w-[30%] sm:w-[20%] h-[20%] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
                >
                    Senior Portfolio Strategist & Personal Branding Expert
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-[1.1]"
                >
                    Building Scalable Full-Stack <br className="hidden sm:block" />
                    Solutions with <span className="text-blue-500">Precision</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    I'm a Full Stack Java Developer transforming complex ideas into robust, user-centric web applications. Specializing in the MERN stack and Modern Java ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        to="/projects"
                        className="group px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        to="/contact"
                        className="group px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Tech Stack Marquee (Optional or just icons below) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl"
                >
                    <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Tech Stack</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-lg sm:text-xl font-bold text-orange-500">Java</span>
                        <span className="text-lg sm:text-xl font-bold text-yellow-400">JavaScript</span>
                        <span className="text-lg sm:text-xl font-bold text-cyan-400">React</span>
                        <span className="text-lg sm:text-xl font-bold text-green-500">Node.js</span>
                        <span className="text-lg sm:text-xl font-bold text-green-400">MongoDB</span>
                        <span className="text-lg sm:text-xl font-bold text-blue-400">Tailwind</span>
                        <span className="text-lg sm:text-xl font-bold text-blue-600">MySQL</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
