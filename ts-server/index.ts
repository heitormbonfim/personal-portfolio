import express, { Response, json } from "express";
import { join } from "path";
import logs from "./utils/log";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();
const portFlag = process.argv[2];
const portArg = process.argv[3];
let PORT: number | string = 5000;

if (portFlag == "--port" && portArg) {
  const portNum = Number(portArg);
  if (isNaN(portNum)) {
    throw new Error("Port must be a number");
  }
  PORT = portArg;
} else if (process.env.PORT) {
  if (isNaN(Number(process.env.PORT))) throw new Error("Environment PORT must be a number");
  PORT = process.env.PORT;
}

const server = express();

const DEVELOPMENT = process.env.NODE_ENV === "development";

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 200, // max requests
});

// configs
server.use(limiter);
server.use(json());
server.use(logs);

// Api routes
server.use("/api/hello", function (_, res: Response) {
  res.status(200).json({ error: false, message: "Hello, this API Version 1 is working" });
});

// Serve static files
export const staticFilesPath = join(__dirname, "public", "index.html");
server.use(express.static(join(__dirname, "public")));
server.use("/:any", express.static(join(__dirname, "public")));

// Start server
server.listen(PORT, () => {
  const env = DEVELOPMENT ? "DEVELOPMENT" : "PRODUCTION";
  const logData = {
    timestamp: new Date().toLocaleString("en", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    message: "Server is running",
    port: PORT,
    mode: env,
  };
  console.info(logData);
});
