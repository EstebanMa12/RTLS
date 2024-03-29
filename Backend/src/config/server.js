import { express } from "express";
import cors from "cors";

import { ServerRoutes } from "./routes/server-routes";
import { UserRoutes } from "./routes/user-routes";

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
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//Routes

app.use("/api", ServerRoutes);
app.use("/api", UserRoutes);