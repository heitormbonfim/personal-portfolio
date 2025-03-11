"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    const start = process.hrtime();
    const { method, originalUrl, headers, body } = req;
    res.on("finish", () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const responseTime = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);
        const logEntry = {
            timestamp: new Date().toLocaleString("en", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
            method,
            url: originalUrl,
            body,
            status: res.statusCode,
            responseTime: `${responseTime}ms`,
        };
        console.log(logEntry);
    });
    next();
}
exports.default = logger;
