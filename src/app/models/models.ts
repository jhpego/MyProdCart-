export type Navigation = {
    label: string;
    url: string;
};

export type Person = {
    id: string;
    age: number;
    firstName: string;
    lastName: string;
    hobbys: Hobby[];

};

export type Hobby = {
    id: string;
    description: string;
};

export type Product = {
    productCode: string;
    descriptive: string;
    quantity: number;
    unitPrice: number;
    vATPercentage?: number;
};