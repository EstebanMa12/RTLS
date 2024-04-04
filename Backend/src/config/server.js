const express = require("express");
const cors =  require("cors");
const { json, urlencoded } = require("express");

const  ServerRoutes = require("./routes/server-routes");
const  UserRoutes =  require("./routes/user-routes");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
});


// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

//Routes

app.use("/api", ServerRoutes);
app.use("/api", UserRoutes);