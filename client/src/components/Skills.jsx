
import { motion } from "framer-motion";

const skillsData = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Java (Core)", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Vercel"] },
];

const Skills = () => {
    return (
        <section className="py-20 bg-black text-white" id="skills">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-blue-400">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-blue-500/50 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
