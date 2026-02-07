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

        // Save to DB
        const newMessage = new Message({ name, mobile, email, message });
        await newMessage.save();

        // Send Email
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

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send message" });
    }
});

// ---------------- PROJECT ROUTES ----------------
app.get("/api/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ---------------- DB CONNECTION ----------------
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        );
    })
    .catch((err) => console.error(err));
