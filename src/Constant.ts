export const AMAZON_PRODUCT = {
  URL: 'https://na.business-api.amazon.com/products/',
  header: {
    access_token: '<Access Token>',
    token_type: 'bearer',
    expires_in: 3600,
  },
};

export const FLIPKART_PRODUCT = {
  URL: 'https://affiliate-api.flipkart.net/affiliate/search/json',
  header: {
    'Fk-Affiliate-Id': '<Affiliate Tracking ID>',
    'Fk-Affiliate-Token': '<Affiliate API Token>',
  },
};

export const COUNTRY = 'US';

export const SHOPPING_PLATFORMS = {
  AMAZON: 'amazon',
  FLIPKART: 'flipkart',
  CROMA: 'croma',
  RDigital: 'reliance_digital',
};
