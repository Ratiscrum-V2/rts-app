export interface LoginResponse {
    email: string;
    nickname: string;
    message: string;
    session: {
        token: string;
        issued: number;
        expires: number;
    };
}