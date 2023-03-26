import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { from } from 'rxjs';
import { AMAZON_PRODUCT, COUNTRY } from 'src/Constant';
import AmazonProductRequest from 'src/modal/Amazon/AmazonProductRequest';
import Product from 'src/modal/Product';

@Injectable()
export class AmazonService {
  constructor(private httpService: HttpService) {}

  async getProduct(productQuery: string): Promise<Product[]> {
    const requestParams = new AmazonProductRequest();
    requestParams.keyword = productQuery;
    requestParams.country = COUNTRY;
    requestParams.category = 'aps';
    const productResponse: Product[] = [];
    try {
      const requestUrl = `${AMAZON_PRODUCT.URL}${moment(new Date()).format(
        'YYYY-MM-DD',
      )}/products/productRegion=US&locale=en_US&keyword=${productQuery}`;
      console.log(requestUrl, 'requestUrl');
      const request = this.httpService.get(requestUrl, {
        //params: requestParams,
        headers: AMAZON_PRODUCT.header,
      });
      const response = await from(request).toPromise();
      if (response && response.data) {
        response.data.products.forEach((product) => {
          productResponse.push(
            new Product(
              product?.title,
              product?.thumbnail,
              product?.price?.current_price,
            ),
          );
        });
      }
    } catch (err) {
      console.error(err, 'Error Amazon Product Response');
    }
    return productResponse;
  }
}
