
import React from "react";
import ProjectCard from "./ProjectCard";
import API_BASE_URL from "../api/api";

const projectsData = [
    {
        title: "Student Performance Predictor",
        tech: ["React", "Node.js", "MySQL", "Machine Learning (Basic)"],
        problem: "Educational institutions struggle to identify at-risk students early enough to intervene effectively.",
        solution: "Developed a web application that analyzes historical student data to predict future performance trends using basic regression algorithms.",
        result: "Enabled faculty to provide proactive academic support, potentially improving student retention and success rates."
    },
    {
        title: "Library Management System",
        tech: ["Express.js", "Node.js", "MySQL", "Bootstrap"],
        problem: "Manual book tracking led to inventory errors, lost books, and inefficient borrowing processes.",
        solution: "Built a robust backend system to automate book issuing, returns, fine calculation, and inventory management.",
        result: "Streamlined library operations, reduced manual record-keeping errors by ~40%, and improved user experience for librarians."
    },
    {
        title: "Food Delivery App",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        problem: "Local restaurants lacked a streamlined, user-friendly platform for managing online orders.",
        solution: "Created a responsive full-stack food delivery application with real-time menu updates and cart functionality.",
        result: "Delivered a seamless ordering experience for users and an efficient dashboard for restaurant owners to manage orders."
    },
];

const Projects = () => {
    const [projects, setProjects] = React.useState(projectsData); // Initialize with fallback

    React.useEffect(() => {
        fetch(`${API_BASE_URL}/api/projects`)
            .then(res => {
                if (res.ok) return res.json();
                throw new Error('Network response was not ok');
            })
            .then(data => {
                if (data && data.length > 0) setProjects(data);
            })
            .catch(err => console.log("Using local data (Backend not reachable)", err));
    }, []);

    return (
        <section className="py-20 bg-[#0a0a0a] text-white" id="projects">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl">
                        A selection of projects that demonstrate my ability to solve real-world problems with code.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project._id || index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
