import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { from, of } from 'rxjs';
import Product from 'src/modal/Product';

@Injectable()
export class CromaService {
  constructor(private httpService: HttpService) {}

  async getProduct(productQuery: string): Promise<Product[]> {
    const productResponse: Product[] = [];
    // No Api for Developer Support
    return from(of(productResponse)).toPromise();
  }
}
