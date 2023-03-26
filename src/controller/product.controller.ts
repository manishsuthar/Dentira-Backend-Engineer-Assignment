import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { SHOPPING_PLATFORMS } from 'src/Constant';
import ProductResponse from 'src/modal/ProductResponse';
import { AmazonService } from 'src/services/amazon.service';
import { CromaService } from 'src/services/croma.service';
import { FlipKartService } from 'src/services/flipkart.service';
import { RDigitalService } from 'src/services/rdigital.service';

@Controller()
export class ProductController {
  constructor(
    private readonly amazonService: AmazonService,
    private readonly flipkartService: FlipKartService,
    private readonly rDigital: RDigitalService,
    private readonly croma: CromaService,
  ) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3000)
  @Get('search')
  async getProducts(@Query() query: { q: string }): Promise<ProductResponse> {
    const productResponse = new ProductResponse();
    try {
      const amazonProducts = this.amazonService.getProduct(query.q);
      const flipkartProducts = this.flipkartService.getProduct(query.q);
      const cromaProducts = this.croma.getProduct(query.q);
      const rDigitalProducts = this.rDigital.getProduct(query.q);
      const productsResults = await Promise.all([
        amazonProducts,
        flipkartProducts,
        cromaProducts,
        rDigitalProducts,
      ]);
      const resultMap = new Map();
      resultMap.set(SHOPPING_PLATFORMS.AMAZON, productsResults[0]);
      resultMap.set(SHOPPING_PLATFORMS.FLIPKART, productsResults[1]);
      resultMap.set(SHOPPING_PLATFORMS.CROMA, productsResults[2]);
      resultMap.set(SHOPPING_PLATFORMS.RDigital, productsResults[3]);
      productResponse.results = resultMap;
    } catch (err) {
      console.error(err);
    }

    return productResponse;
  }
}
