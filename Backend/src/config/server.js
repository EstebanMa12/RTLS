const express = require("express");
const cors =  require("cors");
const { json, urlencoded } = require("express");

const  ServerRoutes = require("./routes/server-routes");
const  UserRoutes =  require("./routes/user-routes");

const { startMQTTSubscriber } = require("./sub");
const { startMQTTPublisher } = require("./pub");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
    startMQTTPublisher();
    startMQTTSubscriber()
});


// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

//Routes
app.get("/", (req, res)=>{
    res.send("The server is running")
})

app.use(`${process.env.API_VERSION_ROUTE}`, ServerRoutes);
app.use(`${process.env.API_VERSION_ROUTE}`, UserRoutes);