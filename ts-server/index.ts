import express, { Response, json } from "express";
import { join } from "path";
import logs from "./utils/log";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const isDevelopment = process.env.NODE_ENV === "development";

app.use(json());
app.use(logs);

// Api routes
app.use("/v1/hello", function (_, res: Response) {
  res
    .status(200)
    .json({ error: false, message: "Hello, this API Version 1 is working" });
});

// Serve static files
const publicDir = isDevelopment ? "../public" : "public";
app.use(express.static(join(__dirname, publicDir, "assets")));
app.use("/", express.static(join(__dirname, publicDir)));
app.use("/:any", express.static(join(__dirname, publicDir)));

// Start server
app.listen(port, () => {
  console.info(
    `✔ server is running on port ${port} - ${
      isDevelopment ? "DEVELOPMENT MODE\n\n" : "PRODUCTION MODE\n\n"
    }`
  );
});
