const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const adminRoute = require("./routes/admins");
const movieRoute = require("./routes/movies");
const searchRoute = require("./routes/search");
const listRoute = require("./routes/lists");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect DB successful!"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/admins", adminRoute);
app.use("/api/movies", movieRoute);
app.use("/api/search", searchRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
