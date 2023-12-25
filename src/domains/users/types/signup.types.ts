export type SignUpPayload = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;   
}

export type SignupResponse = {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    verified: boolean;
}

export type User = {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    verified: boolean;
}