export interface Billboard{
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category{
    id: string;
    name: string;
    billboard: Billboard;
} 


export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    size: Size;
    images: Image[];
    isFeatured: boolean;
}


export interface Image{
    id: string;
    url: string;
}

export interface Size{
    id: string;
    name: string;
    value: string;
}