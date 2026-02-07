
import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Database, Layout } from "lucide-react";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all group"
        >
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" title="View Code">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-sm text-gray-400 mb-1 font-semibold text-red-300">Problem:</p>
                        <p className="text-sm text-gray-300">{project.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-sm text-gray-400 mb-1 font-semibold text-green-300">Solution:</p>
                        <p className="text-sm text-gray-300">{project.solution}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-sm text-gray-400 mb-1 font-semibold text-blue-300">Result:</p>
                        <p className="text-sm text-gray-300">{project.result}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
