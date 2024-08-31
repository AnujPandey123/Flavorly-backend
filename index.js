const express = require("express");
const path = require("path"); // Required to resolve paths correctly
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

const config = require("./db/config");
const Home = require("./controllers/controller");
const LoginRoute = require("./routes/LoginRoute");
const RegisterRoute = require("./routes/RegisterRoute");
const verifyToken = require("./Middleware/middleware");
const RecipeRoute = require("./routes/RecipeRoute");
const ForgotPassword = require("./routes/forgotPassword");

// Set up routes
app.use("/auth", LoginRoute);
app.use("/auth", RegisterRoute);
app.use("/auth", RecipeRoute);
app.use("/auth", ForgotPassword);

// Set up your home route with middleware
app.get("/", verifyToken, Home.Home);

// Serve static files from the React app's build directory
app.use(express.static(path.join("/", "client/build"))); // Adjust 'client/build' to your React app's build folder location

// Catch-all route to handle any other route and serve the index.html of React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve("/", "client/build", "index.html")); // Adjust path if needed
});

if (config) {
  app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
  });
}
