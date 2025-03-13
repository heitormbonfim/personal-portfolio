import express, { Request, Response, json, NextFunction } from "express";
import { join } from "path";
import logs from "./utils/log";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import compression from "compression";

dotenv.config();

const portFlag = process.argv[2];
const portArg = process.argv[3];
let PORT: number | string = 5000;

if (portFlag === "--port" && portArg) {
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

// Rate limiting: limit repeated requests to public APIs
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 200, // max 200 requests per windowMs
});

// Middleware stack
server.use(limiter);
server.use(json());
server.use(logs);

// Security and performance enhancements
server.use(helmet());
server.use(compression());

// API route example
server.use("/api/hello", (_: Request, res: Response) => {
  res.status(200).json({ error: false, message: "Hello, this API Version 1 is working" });
});

// Serve static assets with caching (adjust maxAge as needed)
const publicPath = join(__dirname, "public");
server.use(express.static(publicPath, { maxAge: "30d" }));

// Catch-all route for React's index.html (only GET requests)
server.get("*", (req: Request, res: Response) => {
  res.sendFile(join(publicPath, "index.html"), (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send(err);
    }
  });
});

// Global error handling middleware
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
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
