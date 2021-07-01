// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { urlencoded } = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/notFoundHandler");
const homeRouter = require("./router/homeRouter");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");

const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connect successfully!"))
  .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set views
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", homeRouter);
app.use("/", loginRouter);
app.use("/", usersRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
