require("dotenv").config();
const express = require("express");

const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const authRoutes =  require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

//Middleware to handle CORS
app.use(
    cors(
        {
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
            
        }
    ));

    //Connect to database
    connectDB();

    //Middleware
    app.use(express.json());

    //Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/users", userRoutes);
    app.use("/api/jobs", jobRoutes);

    //serve uploads folder
    app.use("/uploads", express.static(path.join(__dirname, "uploads"),{}));

    //start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
