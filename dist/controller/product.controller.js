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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const Constant_1 = require("../Constant");
const ProductResponse_1 = require("../modal/ProductResponse");
const amazon_service_1 = require("../services/amazon.service");
const croma_service_1 = require("../services/croma.service");
const flipkart_service_1 = require("../services/flipkart.service");
const rdigital_service_1 = require("../services/rdigital.service");
let ProductController = class ProductController {
    constructor(amazonService, flipkartService, rDigital, croma) {
        this.amazonService = amazonService;
        this.flipkartService = flipkartService;
        this.rDigital = rDigital;
        this.croma = croma;
    }
    async getProducts(query) {
        const productResponse = new ProductResponse_1.default();
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
            resultMap.set(Constant_1.SHOPPING_PLATFORMS.AMAZON, productsResults[0]);
            resultMap.set(Constant_1.SHOPPING_PLATFORMS.FLIPKART, productsResults[1]);
            resultMap.set(Constant_1.SHOPPING_PLATFORMS.CROMA, productsResults[2]);
            resultMap.set(Constant_1.SHOPPING_PLATFORMS.RDigital, productsResults[3]);
            productResponse.results = resultMap;
        }
        catch (err) {
            console.error(err);
        }
        return productResponse;
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.CacheInterceptor),
    (0, common_1.CacheTTL)(3000),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
ProductController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [amazon_service_1.AmazonService,
        flipkart_service_1.FlipKartService,
        rdigital_service_1.RDigitalService,
        croma_service_1.CromaService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map