const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectionOfDb = require("./config/connect.js");
const path = require("path");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectionOfDb();

// Port number
const PORT = process.env.PORT || 3000;


// Middlewares
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Static file route for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route handlers
app.use("/api/user", require("./routes/userRoutes.js"));
app.use("/api/admin", require("./routes/adminRoutes.js"));
app.use("/api/owner", require("./routes/ownerRoutes.js"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
