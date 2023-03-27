// write an interface for product
export interface Product{
    title: string;
    description: string;
    image: string;
    category:Array<string>;
    badge: string;
    price: number;
    rating: number;
    id: number;
    quantity: number;
    inCart: boolean;
}