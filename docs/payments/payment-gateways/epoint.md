---
sidebar_position: 13
---

# Epoint Overview

Epoint is a payment system based in Azerbaijan that allows users to make electronic payments for various services and purchases. It was created to facilitate secure and convenient electronic payments in Azerbaijan.

## How to Set Up Epoint Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Epoint**" as your payment provider (if not available, see the [Epoint isn't available with your store currency](#epoint-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Public key**" and "**Private key**" from your Epoint account, then click on the **Submit** button

### Epoint Public and Private Keys

Before creating and verifying your Epoint account, please ensure that your online store complies with [Epoint's internal rules](https://epoint.az/en/rules).

To configure the merchant in Epoint system, you will need to provide them with the following information:

- Your website address
- URL page of successful payment - success_url
- URL page to display information about unsuccessful payment - error_url
- URL to send payment result - result_url

After checking this information, you will be given the access keys: public_key - the merchant ID in Epoint system and private_key - the secret access key to the API.

To generate your Public and Private keys, please follow the steps below:

1. Log in to your Epoint account
2. Navigate to the ***API Management → Connection options***
   - In this section, you will need to provide four essential links: the website address, success link, fail link, and result link
3. After adding the required links, click the ***Save*** button to save your settings

For those planning to add a custom domain to their eCommerce store, it's essential to add the custom domain before connecting to Epoint. However, if you've initially added yourstore.biz.cyou links and decide to incorporate a custom domain at a later stage, please remember to update the necessary links on Epoint as well.

Once you have added the necessary links, please allow 24 hours for the system to verify the connection and generate your public and private keys.

Upon successful verification, you will find your public and private keys displayed on the same ***Connection options*** page.

By following these steps, you can easily set up your Epoint Public and Private keys for seamless integration with our platform.

## Epoint Supported Currencies

You can take payments from Azerbaijan in Azerbaijani Manat (AZN) with Epoint.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Azerbaijani Manat | AZN |

## Epoint Isn't Available with Your Store Currency

If Epoint payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Epoint supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Epoint supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Epoint

### Azerbaijan-Focused Payment Solution

Epoint offers specialized features for the Azerbaijani market:

- **Local Currency Processing**: All transactions in AZN
- **Azerbaijani Banking Integration**: Direct connection to local banking system
- **Localized Experience**: Interface and support in Azerbaijani
- **Domestic Compliance**: Adherence to local regulations and standards
- **Local Support**: Azerbaijan-based customer service

### Payment Methods

Epoint supports several payment methods for Azerbaijani customers:

- **Credit/Debit Cards**: Major cards accepted in Azerbaijan
- **Online Banking**: Integration with Azerbaijani banks
- **Mobile Payments**: Support for mobile payment options
- **Electronic Wallets**: Various e-wallet options
- **Alternative Payment Methods**: Other local payment solutions

### Business Tools

Epoint offers various tools for merchants:

- **Merchant Dashboard**: Track transactions and manage settings
- **Reporting**: Detailed transaction reporting and analytics
- **API Integration**: Connect with your existing systems
- **Security Features**: Fraud protection and secure transactions
- **Support Resources**: Documentation and assistance

## Best Practices for Using Epoint

1. **Configure for Azerbaijani market**: Ensure your store is set up for local customers
2. **Display pricing in AZN**: All products should be priced in Azerbaijani Manat
3. **Test thoroughly**: Verify your integration before going live
4. **Keep credentials secure**: Never expose your private key in client-side code
5. **Implement proper error handling**: Handle payment errors gracefully
6. **Verify transactions**: Always confirm payment status before fulfilling orders
7. **Consider local regulations**: Ensure compliance with Azerbaijani e-commerce laws
8. **Provide local language option**: Consider offering Azerbaijani as a language choice
9. **Display payment logos**: Show Epoint and accepted payment methods on your site
10. **Monitor transactions**: Regularly check your Epoint dashboard

## Troubleshooting Common Issues

When using Epoint, you might encounter these common issues:

### Configuration Problems
- Incorrect URL endpoints
- Missing success/error/result URLs
- Misconfigured website domain

### Authentication Issues
- Invalid API credentials
- Expired keys
- Incorrect implementation of authentication

### Transaction Failures
- Insufficient funds
- Card restrictions
- Failed authorization

For technical support with your Epoint integration, contact Epoint support or visit the [Epoint website](https://epoint.az/).
