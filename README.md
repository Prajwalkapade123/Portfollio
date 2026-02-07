# Personal Portfolio (MERN Stack)

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## Features

- **Responsive Design**: Works on all devices.
- **Modern UI**: specialized animations using Framer Motion.
- **Project Showcase**: Detailed project cards with Problem/Solution/Result format.
- **Contact Form**: Integrated with backend API.
- **Tech Stack**: React, Tailwind CSS v4, Node.js, Express, MongoDB.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed (or use a cloud URI)

### Installation

1.  **Clone the repository** (if applicable)

2.  **Setup Server**:
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in `server/`:
    ```env
    MONGO_URI=mongodb://localhost:27017/portfolio
    PORT=5000
    ```
    (Optional) Seed the database with sample projects:
    ```bash
    node seed.js
    ```
    Start the server:
    ```bash
    node index.js
    ```

3.  **Setup Client**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

4.  **View Application**:
    Open `http://localhost:5173` in your browser.

## Customization

- **Content**: Update data in `server/seed.js` or directly in `client/src/components/` if using static data fallback.
- **Styles**: Edit `client/src/index.css` for Tailwind theme customization.
