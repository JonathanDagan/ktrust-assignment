import winston from "winston";

import { ENV } from "../config/env";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "ktrust-server" },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({
            filename: "./logs/error.log",
            level: "error",
        }),
        new winston.transports.File({ filename: "./logs/combined.log" }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (ENV.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
            level: "debug",
        })
    );
    logger.add(
        new winston.transports.File({
            filename: "./logs/debug.log",
            level: "debug",
        })
    );
}

export default logger;