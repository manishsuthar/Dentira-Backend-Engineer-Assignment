export default class AmazonProductResponse {
    amazonChoice: boolean;
    amazonPrime: boolean;
    asin: string;
    bestSeller: boolean;
    price: {
        before_price: number;
        currency: string;
        current_price: string;
        discounted: boolean;
        savings_amount: number;
        savings_percent: number;
    };
    reviews: {
        rating: number;
        total_reviews: number;
    };
    score: string;
    sponsored: boolean;
    thumbnail: string;
    title: string;
    url: string;
}
