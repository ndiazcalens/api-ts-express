//las intefaces son como un contrato de como tiene que ser cierto dato
export interface Car{
    color: string;
    gas: 'gasoline' | 'electric'
    year: number
    description: string
    price: number
    name: string
}
