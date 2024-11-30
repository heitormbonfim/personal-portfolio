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
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const isDevelopment = process.env.NODE_ENV === "development";
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.use(log_1.default);
app.use("/v1/hello", function (_, res) {
    res.status(200).json({ error: false, message: "Hello, this API Version 1 is working" });
});
const publicDir = isDevelopment ? "../public" : "public";
app.use(express_1.default.static((0, path_1.join)(__dirname, publicDir, "assets")));
app.use("/", express_1.default.static((0, path_1.join)(__dirname, publicDir)));
app.use("/:any", express_1.default.static((0, path_1.join)(__dirname, publicDir)));
app.listen(port, () => {
    console.info(`✔ server is running on port ${port} - ${isDevelopment ? "DEVELOPMENT MODE\n\n" : "PRODUCTION MODE\n\n"}`);
});
