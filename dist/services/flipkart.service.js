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
exports.FlipKartService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const Constant_1 = require("../Constant");
const Product_1 = require("../modal/Product");
let FlipKartService = class FlipKartService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getProduct(productQuery) {
        const productResponse = [];
        const requestUrl = `${Constant_1.FLIPKART_PRODUCT.URL}?query=${productQuery}&resultCount=10`;
        try {
            const request = this.httpService.get(requestUrl, {
                headers: Constant_1.FLIPKART_PRODUCT.header,
            });
            const response = await (0, rxjs_1.from)(request).toPromise();
            if (response && response.data) {
                response.data.productInfoList.forEach((productBaseInfo) => {
                    var _a, _b, _c, _d;
                    productResponse.push(new Product_1.default((_a = productBaseInfo === null || productBaseInfo === void 0 ? void 0 : productBaseInfo.productAttributes) === null || _a === void 0 ? void 0 : _a.title, (_b = productBaseInfo === null || productBaseInfo === void 0 ? void 0 : productBaseInfo.productAttributes) === null || _b === void 0 ? void 0 : _b.imageUrls[0], (_d = (_c = productBaseInfo === null || productBaseInfo === void 0 ? void 0 : productBaseInfo.productAttributes) === null || _c === void 0 ? void 0 : _c.maximumRetailPrice) === null || _d === void 0 ? void 0 : _d.amount));
                });
            }
        }
        catch (err) {
            console.error(err, 'Error Flipkart Product Response');
        }
        return (0, rxjs_1.from)((0, rxjs_1.of)(productResponse)).toPromise();
    }
};
FlipKartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], FlipKartService);
exports.FlipKartService = FlipKartService;
//# sourceMappingURL=flipkart.service.js.map