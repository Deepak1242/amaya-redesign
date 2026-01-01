export type Category = "Serums" | "Creams" | "Oils" | "Cleansers" | "Sets";

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number; // 0-5
    reviews: number;
    image: string; // URL
    category: Category;
    tags: string[]; // e.g., "Best Seller", "New"
    benefits: string[];
    ingredients: string[]; // Key ingredients for display
}
