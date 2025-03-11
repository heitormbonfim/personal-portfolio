import { NextFunction, Request, Response } from "express";

export default function logger(req: Request, res: Response, next: NextFunction) {
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
      // headers,
      body,
      status: res.statusCode,
      responseTime: `${responseTime}ms`,
    };

    console.log(logEntry);
  });

  next();
}
