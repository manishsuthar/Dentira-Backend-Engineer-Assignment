"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOPPING_PLATFORMS = exports.COUNTRY = exports.FLIPKART_PRODUCT = exports.AMAZON_PRODUCT = void 0;
exports.AMAZON_PRODUCT = {
    URL: 'https://na.business-api.amazon.com/products/',
    header: {
        access_token: '<Access Token>',
        token_type: 'bearer',
        expires_in: 3600,
    },
};
exports.FLIPKART_PRODUCT = {
    URL: 'https://affiliate-api.flipkart.net/affiliate/search/json',
    header: {
        'Fk-Affiliate-Id': '<Affiliate Tracking ID>',
        'Fk-Affiliate-Token': '<Affiliate API Token>',
    },
};
exports.COUNTRY = 'US';
exports.SHOPPING_PLATFORMS = {
    AMAZON: 'amazon',
    FLIPKART: 'flipkart',
    CROMA: 'croma',
    RDigital: 'reliance_digital',
};
//# sourceMappingURL=Constant.js.map