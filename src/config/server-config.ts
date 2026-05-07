
export const SERVER_CONFIG = {
    port: Number (process.env.PORT) || 3000,
    idleTimeout: 30,
    path: "/socket.io", //ws://localhost:3000/socket.io
} as const;