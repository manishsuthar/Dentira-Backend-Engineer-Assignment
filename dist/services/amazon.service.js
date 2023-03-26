"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const moment = require("moment");
const rxjs_1 = require("rxjs");
const Constant_1 = require("../Constant");
const AmazonProductRequest_1 = require("../modal/Amazon/AmazonProductRequest");
const Product_1 = require("../modal/Product");
let AmazonService = class AmazonService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getProduct(productQuery) {
        const requestParams = new AmazonProductRequest_1.default();
        requestParams.keyword = productQuery;
        requestParams.country = Constant_1.COUNTRY;
        requestParams.category = 'aps';
        const productResponse = [];
        try {
            const requestUrl = `${Constant_1.AMAZON_PRODUCT.URL}${moment(new Date()).format('YYYY-MM-DD')}/products/productRegion=US&locale=en_US&keyword=${productQuery}`;
            console.log(requestUrl, 'requestUrl');
            const request = this.httpService.get(requestUrl, {
                headers: Constant_1.AMAZON_PRODUCT.header,
            });
            const response = await (0, rxjs_1.from)(request).toPromise();
            if (response && response.data) {
                response.data.products.forEach((product) => {
                    var _a;
                    productResponse.push(new Product_1.default(product === null || product === void 0 ? void 0 : product.title, product === null || product === void 0 ? void 0 : product.thumbnail, (_a = product === null || product === void 0 ? void 0 : product.price) === null || _a === void 0 ? void 0 : _a.current_price));
                });
            }
        }
        catch (err) {
            console.error(err, 'Error Amazon Product Response');
        }
        return productResponse;
    }
};
AmazonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AmazonService);
exports.AmazonService = AmazonService;
//# sourceMappingURL=amazon.service.js.map