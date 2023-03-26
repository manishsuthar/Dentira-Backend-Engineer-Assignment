import { AmazonService } from "src/services/amazon.service";
import { CromaService } from "src/services/croma.service";
import { FlipKartService } from "src/services/flipkart.service";
import { RDigitalService } from "src/services/rdigital.service";
export declare class ProductController {
    private readonly amazonService;
    private readonly flipkartService;
    private readonly rDigital;
    private readonly croma;
    constructor(amazonService: AmazonService, flipkartService: FlipKartService, rDigital: RDigitalService, croma: CromaService);
    getProducts(query: {
        q: string;
    }): Promise<any>;
}
