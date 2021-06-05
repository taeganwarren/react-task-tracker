declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production',
            MONGO_HOST: string,
            MONGO_PORT: string,
            MONGO_DATABASE: string,
            MONGO_USER: string,
            MONGO_PASS: string
        }
    }
}

export {}