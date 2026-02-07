
const mongoose = require('mongoose');
const Project = require('./models/Project');
const dotenv = require('dotenv');

dotenv.config();

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

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
    .then(async () => {
        console.log('Connected to MongoDB for seeding');
        await Project.deleteMany({});
        await Project.insertMany(projectsData);
        console.log('Projects seeded successfully');
        process.exit();
    })
    .catch((err) => {
        console.error('Seeding error:', err);
        process.exit(1);
    });
