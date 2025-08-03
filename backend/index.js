const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Enable CORS for all requests
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// Routes
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");

app.use("/api/post", postRoute);
app.use("/api/user", usersRoute);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
