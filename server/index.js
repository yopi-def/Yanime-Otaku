import { clientCache } from "./middlewares/cache.js";
import appConfig from "./configs/app.config.js";
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import otakudesuRouter from "./routes/otakudesu.routes.js";
import setPayload from "./helpers/setPayload.js";
import cors from "cors";
const { PORT } = appConfig;
const app = express();
app.use(cors());
app.use(clientCache(1));
app.get("/", (req, res) => {
    const routes = [
        {
            method: "GET",
            path: "/otakudesu",
            description: "Otakudesu",
        }
    ];
    res.json(setPayload(res, {
        data: { routes },
    }));
});
app.use("/otakudesu", otakudesuRouter);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
