export type LoginPayload = {
    username: string;
    password: string;
}

export type LoginResponse = {
    user: {
        userId: string;
        email: string;
    },
    accessToken: string;
    refreshToken: string;
}