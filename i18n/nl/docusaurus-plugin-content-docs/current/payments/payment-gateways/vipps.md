---
sidebar_position: 11
---

# Vipps Overview

Vipps is a popular mobile payment application in Norway. It allows users to send and receive money, make online payments, and pay for goods and services at participating merchants.

Vipps is widely used for payments within Norway and is specifically tailored to the Norwegian market.

## How to Set Up Vipps Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**"
4. If available with your store currency, select "**Vipps**" as your payment provider (if not available, see the [Vipps isn't available with your store currency](#vipps-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" from your Vipps account, then click on the **Submit** button

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Vipps payment method at the checkout

## Vipps Supported Currencies

Vipps is primarily designed for users in Norway, and it supports only Norwegian Krone (NOK) as the currency for transactions. To use Vipps, users are typically required to have a Norwegian social security number, a Norwegian bank account, and a Norwegian mobile phone number.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Norwegian Krone | NOK |

## Vipps Isn't Available with Your Store Currency

If Vipps payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Vipps supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Vipps supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Vipps

### Norwegian-Focused Mobile Payment Solution

Vipps offers specialized features for the Norwegian market:

- **Mobile Payments**: Quick and easy payments via mobile app
- **Norwegian Banking Integration**: Direct connection to Norwegian banks
- **Instant Transfers**: Real-time payment processing
- **QR Code Payments**: Scan-to-pay functionality
- **Widespread Adoption**: Used by millions of Norwegians
- **Local Support**: Norwegian-based customer service

### Payment Methods

Vipps supports several payment methods for Norwegian customers:

- **Direct from Bank**: Connect directly to Norwegian bank accounts
- **App-Based Payments**: Quick payments through the Vipps app
- **Invoice Payments**: Pay bills and invoices
- **In-Store Payments**: Use at physical retail locations
- **Online Shopping**: Integrate with eCommerce stores

### Business Tools

Vipps offers various tools for merchants:

- **Merchant Portal**: Track transactions and manage settings
- **API Integration**: Connect with your existing systems
- **Analytics**: View transaction data and customer insights
- **Marketing Options**: Vipps-branded promotional materials
- **Support Resources**: Documentation and customer service

## Best Practices for Using Vipps

1. **Configure for Norwegian market**: Ensure your store is set up for Norwegian customers
2. **Display pricing in NOK**: All products should be priced in Norwegian Krone
3. **Test thoroughly**: Use sandbox mode to test before going live
4. **Keep credentials secure**: Never expose your secret key in client-side code
5. **Implement proper error handling**: Handle payment errors gracefully
6. **Verify transactions**: Always confirm payment status before fulfilling orders
7. **Clearly display Vipps as payment option**: Add Vipps logo to your checkout page
8. **Optimize for mobile**: Ensure your checkout flow works well on mobile devices
9. **Provide Norwegian language option**: Consider offering Norwegian as a language choice
10. **Stay updated**: Keep your integration up to date with the latest Vipps API

## Troubleshooting Common Issues

When using Vipps, you might encounter these common issues:

### Authentication Problems
- Check that your API credentials are correct
- Verify you're using the correct environment (test or production)
- Ensure your API access hasn't expired

### Payment Failures
- Confirm the customer has a valid Vipps account
- Check if the customer has sufficient funds
- Verify the transaction amount is within allowed limits

### Technical Issues
- Ensure your webhook endpoints are correctly configured
- Check network connections between your server and Vipps
- Verify your SSL certificates are valid

For technical support with your Vipps integration, contact Vipps support or visit the [Vipps Developer Portal](https://developer.vipps.no/).
