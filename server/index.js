const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Models
const Message = require("./models/Message");
const Project = require("./models/Project");

// In-memory fallback storage
let inMemoryMessages = [];
const sampleProjects = [
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
    }
];

// Root
app.get("/", (req, res) => {
    res.send("API is running...");
});

// ---------------- EMAIL CONFIG ----------------
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ---------------- CONTACT ROUTE ----------------
app.post("/api/contact", async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;

        if (!name || !mobile || !email || !message) {
            return res.status(400).json({ message: "All fields required" });
        }

        // Try to save to DB, fallback to in-memory
        try {
            if (mongoose.connection.readyState === 1) {
                const newMessage = new Message({ name, mobile, email, message });
                await newMessage.save();
                console.log("✅ Message saved to MongoDB");
            } else {
                inMemoryMessages.push({ name, mobile, email, message, date: new Date() });
                console.log("⚠️  Message saved to memory (MongoDB unavailable)");
            }
        } catch (dbError) {
            console.error("DB save failed, using memory:", dbError.message);
            inMemoryMessages.push({ name, mobile, email, message, date: new Date() });
        }

        // Send Email
        try {
            await transporter.sendMail({
                from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: `New Message from ${name}`,
                text: `
Name: ${name}
Mobile: ${mobile}
Email: ${email}

Message:
${message}
      `,
            });
            console.log("✅ Email sent successfully");
        } catch (emailError) {
            console.error("⚠️  Email failed:", emailError.message);
        }

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send message" });
    }
});

// ---------------- PROJECT ROUTES ----------------
app.get("/api/projects", async (req, res) => {
    try {
        // Check if MongoDB is connected
        if (mongoose.connection.readyState === 1) {
            const projects = await Project.find();
            if (projects && projects.length > 0) {
                return res.json(projects);
            }
        }

        // Fallback to sample data
        console.log("⚠️  Using sample projects (MongoDB unavailable or empty)");
        res.json(sampleProjects);
    } catch (err) {
        console.error("Projects endpoint error:", err.message);
        res.json(sampleProjects); // Return sample data on error
    }
});

// ---------------- DB CONNECTION ----------------
mongoose
    .connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    })
    .then(() => {
        console.log("✅ MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.error("⚠️  MongoDB Connection Failed:", err.message);
        console.log("⚠️  Server will continue without database. API calls may fail.");
    });

// Start server regardless of MongoDB connection status
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
});