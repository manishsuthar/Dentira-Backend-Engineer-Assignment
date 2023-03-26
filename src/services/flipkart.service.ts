import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { from, of } from 'rxjs';
import { FLIPKART_PRODUCT } from 'src/Constant';
import Product from 'src/modal/Product';

@Injectable()
export class FlipKartService {
  constructor(private httpService: HttpService) {}

  async getProduct(productQuery: string): Promise<Product[]> {
    const productResponse: Product[] = [];
    const requestUrl = `${FLIPKART_PRODUCT.URL}?query=${productQuery}&resultCount=10`;
    try {
      const request = this.httpService.get(requestUrl, {
        headers: FLIPKART_PRODUCT.header,
      });
      const response = await from(request).toPromise();
      if (response && response.data) {
        response.data.productInfoList.forEach((productBaseInfo) => {
          productResponse.push(
            new Product(
              productBaseInfo?.productAttributes?.title,
              productBaseInfo?.productAttributes?.imageUrls[0],
              productBaseInfo?.productAttributes?.maximumRetailPrice?.amount,
            ),
          );
        });
      }
    } catch (err) {
      console.error(err, 'Error Flipkart Product Response');
    }
    return from(of(productResponse)).toPromise();
  }
}
