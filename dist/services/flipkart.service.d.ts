import { HttpService } from '@nestjs/axios';
import Product from 'src/modal/Product';
export declare class FlipKartService {
    private httpService;
    constructor(httpService: HttpService);
    getProduct(productQuery: string): Promise<Product[]>;
}
