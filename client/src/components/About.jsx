
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import assets from "../assets/assets";

const About = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] text-white" id="about">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                    {/* Image / Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative max-w-sm mx-auto md:max-w-none"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 to-purple-600 relative z-10 flex items-center justify-center shadow-2xl">
                            {/* Replace with actual image */}
                            <img src={assets.photo} alt="Profile_image" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 w-full h-full border-2 border-blue-500/30 rounded-2xl z-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <h3 className="text-xl text-blue-400 font-medium mb-6">
                            Full Stack Java Developer & Technology Enthusiast
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Hi, I'm a passionate Full Stack Developer with a strong foundation in Core Java and modern JavaScript frameworks like React and Node.js. I bridge the gap between robust back-end logic and dynamic front-end experiences.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I thrive on solving complex problems and am dedicated to writing clean, maintainable code. Whether it's optimizing database queries with MySQL/MongoDB or crafting pixel-perfect interfaces with Tailwind CSS, I focus on delivering high-quality, user-centric solutions.
                        </p>

                        <a
                            href="https://drive.google.com/file/d/1JWpWUjmjiLc2neUegmCvB0C0VnhyniOY/view?usp=sharing"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
