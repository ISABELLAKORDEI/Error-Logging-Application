export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    company_name: string;
    password: string;
}

export interface Log {
    id: number;
    typeOfLog: string;
    microservice: string;
    message: string;
    screen: string;
    os: string;
    status: string;
}

export interface Filter {
    placeholder: string;
    name: string;
    options: string[];
    defaultValue: string;
}