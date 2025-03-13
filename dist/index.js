"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const path_1 = require("path");
const log_1 = __importDefault(require("./utils/log"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
dotenv_1.default.config();
const portFlag = process.argv[2];
const portArg = process.argv[3];
let PORT = 5000;
if (portFlag == "--port" && portArg) {
    const portNum = Number(portArg);
    if (isNaN(portNum)) {
        throw new Error("Port must be a number");
    }
    PORT = portArg;
}
else if (process.env.PORT) {
    if (isNaN(Number(process.env.PORT)))
        throw new Error("Environment PORT must be a number");
    PORT = process.env.PORT;
}
const server = (0, express_1.default)();
const DEVELOPMENT = process.env.NODE_ENV === "development";
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 200,
});
server.use(limiter);
server.use((0, express_1.json)());
server.use(log_1.default);
server.use("/api/hello", function (_, res) {
    res.status(200).json({ error: false, message: "Hello, this API Version 1 is working" });
});
server.use(express_1.default.static((0, path_1.join)(__dirname, "public")));
server.use("*", express_1.default.static((0, path_1.join)(__dirname, "public", "index.html")));
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
