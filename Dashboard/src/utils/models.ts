export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    company_name: string;
    password: string;
}

export interface Log {
    _id: number;
    typeOfLog: string;
    microservice: string;
    message: string;
    screen: string;
    os: string;
    status: string;
    developer: string;
}

export interface Filter {
    placeholder: string;
    name: string;
    options: string[];
    defaultValue: string;
}

export function convertApiLog(apiLog: any): Log {
    var dev = apiLog['developer']

    if(dev != null) {
        dev = apiLog['developer']['name']
    }

    return {
        _id: apiLog['_id'],
        typeOfLog: apiLog['typeOfLog'],
        microservice: apiLog['microservice'],
        message: apiLog['message'],
        screen: apiLog['screen'],
        os: apiLog['os'],
        status: apiLog['status'],
        developer: dev,
    };
  }