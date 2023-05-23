export const ENV = {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ktrust'
} as const;