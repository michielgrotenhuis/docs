---
sidebar_position: 12
---

# Mollie Overview

[Mollie](https://www.mollie.com/) is a leading European payment provider that specializes in processing online payments on behalf of merchants such as webshop owners.

Mollie payments allow merchants to accept payments in Austria, Belgium, France, Germany, Italy, the Netherlands, and the United Kingdom.

Mollie supports Credit Card, PayPal, iDeal, Bancontact, Sofort, SEPA Bank Transfer, GiroPay payment methods. Note that not all payment methods are available in all supported countries.

[Transaction fees](https://www.mollie.com/pricing) depend on the location and payment method offered by Mollie.

## How to Set Up Mollie Payment Gateway

Before enabling Mollie for your eCommerce store, make sure you've fully set up your account and selected preferred payment methods (Credit Card, PayPal, iDeal, Bancontact, etc.) in your [Mollie dashboard](https://my.mollie.com/dashboard/login).

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Mollie**" as your payment provider (if not available, see the [Mollie isn't available with your store currency](#mollie-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Public Key**" and "**Secret Key**" from your Mollie account, then click on the **Submit** button

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**Test Secret key**" and "**Test Public key**" input boxes to test the Mollie payment method at the checkout

## Mollie Supported Currencies

You can accept payments in Austria, Belgium, France, Germany, Italy, the Netherlands, and the United Kingdom.

Check out supported currencies with their respective payment methods on the [Mollie documentation](https://docs.mollie.com/payments/multicurrency).

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Euro | EUR |
| United Arab Emirates Dirham | AED |
| Australian Dollar | AUD |
| Bulgarian Lev | BGN |
| Canadian Dollar | CAD |
| Swiss Franc | CHF |
| Czech Koruna | CZK |
| Danish Krone | DKK |
| Pound Sterling | GBP |
| Hong Kong Dollar | HKD |
| Croatian Kuna | HRK |
| Hungarian Forint | HUF |
| Israeli New Shekel | ILS |
| Icelandic Króna | ISK |
| Japanese Yen | JPY |
| Norwegian Krone | NOK |
| New Zealand Dollar | NZD |
| Philippine Peso | PHP |
| Polish Zloty | PLN |
| Romanian Leu | RON |
| Russian Ruble | RUB |
| Swedish Krona | SEK |
| Singapore Dollar | SGD |
| United States Dollar | USD |
| South African Rand | ZAR |

## Mollie Isn't Available with Your Store Currency

If Mollie payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Mollie supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Mollie supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Mollie

### European-Focused Payment Solution

Mollie offers specialized payment solutions for European markets:

- **Multi-Country Support**: Available in multiple European countries
- **Local Payment Methods**: Support for country-specific payment options
- **Multi-Currency Processing**: Accept payments in various currencies
- **European Banking Integration**: Direct connection to European banking systems
- **SEPA Compatibility**: Support for Single Euro Payments Area

### Payment Methods

Mollie supports numerous payment methods popular in Europe:

- **Credit Cards**: Visa, Mastercard, American Express
- **Local Methods**: iDEAL (Netherlands), Bancontact (Belgium), EPS (Austria)
- **Bank Transfers**: SEPA bank transfers
- **Digital Wallets**: PayPal, Apple Pay, Google Pay
- **Buy Now Pay Later**: Klarna, in3
- **Vouchers**: Various gift cards and vouchers

### Business Tools

Beyond payment processing, Mollie offers:

- **Dashboard**: Comprehensive reporting and analytics
- **API & SDKs**: Easy integration with various platforms
- **Payment Links**: Create payment links without coding
- **Recurring Payments**: For subscription-based businesses
- **Multi-currency Support**: Accept and convert between currencies

## Best Practices for Using Mollie

1. **Offer local payment methods**: Enable popular local payment methods for each country you serve
2. **Test thoroughly**: Use the sandbox environment to test your integration
3. **Keep credentials secure**: Never expose your API keys in client-side code
4. **Implement webhooks**: Set up webhook notifications for real-time payment updates
5. **Handle failures gracefully**: Implement proper error handling in your checkout
6. **Stay compliant**: Follow PSD2 and Strong Customer Authentication requirements
7. **Display payment logos**: Show available payment method logos at checkout
8. **Monitor transactions**: Regularly check your Mollie dashboard
9. **Multi-language support**: Offer checkout in languages appropriate to your markets
10. **Keep integration updated**: Stay current with the latest Mollie API

## Troubleshooting Common Issues

Common issues with Mollie integration include:

### Authentication Problems
- Incorrect API keys
- Using test keys in production environment
- Expired API keys

### Payment Processing Issues
- Unsupported currency
- Transaction amount outside allowed limits
- Payment method not enabled in your Mollie account

### Technical Issues
- Misconfigured webhooks
- SSL certificate issues
- Browser compatibility problems

For technical support with your Mollie integration, contact Mollie support or visit the [Mollie Help Center](https://help.mollie.com/).
