---
sidebar_position: 8
---

# Mamo Pay Overview

Mamo Pay is a full-stack payment services platform for SMEs based in the UAE.

Mamo Pay is a peer-to-peer payment app that allows users in the UAE to send, receive, and request money instantly using their smartphone contacts.

## How to Set Up Mamo Pay Payment Gateway for eCommerce Store

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Mamo Pay**" as your payment provider (if not available, see the [Mamo Pay isn't available with your store currency](#mamo-pay-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" (API Key) from your Mamo Pay account, then click on the **Submit** button

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Mamo Pay payment method at the checkout

## Mamo Pay Supported Currencies

Mamo Pay supports three currencies: AED, USD, and EUR. However, regardless of the currency used for the transaction, all payments will be settled in AED.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| United Arab Emirates Dirham | AED |
| United States Dollar | USD |
| Euro | EUR |

For the latest list, check out [Mamo Pay supported currencies](https://support.mamopay.com/hc/en-us/articles/360019506358-What-currencies-does-Mamo-Pay-for-Business-accept-).

## Mamo Pay Isn't Available with Your Store Currency

If Mamo Pay payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Mamo Pay supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Mamo Pay supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Mamo Pay

### Payment Solutions for UAE Businesses

Mamo Pay offers specialized payment solutions for the UAE market:

- **Mamo Business**: Complete payment solution for UAE businesses
- **Instant Settlements**: Receive payments directly to your UAE bank account
- **No Hidden Fees**: Transparent fee structure with no hidden charges
- **Dashboard**: Track all transactions in real-time
- **Integration Options**: API, payment links, and more

### User Experience

Mamo Pay prioritizes user experience with:

- **Simplified Checkout**: Easy and intuitive payment process
- **Mobile-Optimized**: Designed for modern smartphone users
- **Fast Processing**: Quick payment confirmation
- **Local Support**: UAE-based customer support team
- **Multi-Language Support**: Arabic and English interfaces

### Security Features

Mamo Pay maintains strong security standards:

- **End-to-End Encryption**: Secure transmission of payment data
- **PCI-DSS Compliance**: Industry-standard security protocols
- **Fraud Prevention**: Advanced fraud detection and prevention
- **Data Protection**: Comprehensive data security measures
- **Regular Security Audits**: Continuous security monitoring

## Best Practices for Using Mamo Pay

1. **Test thoroughly**: Use the sandbox mode to test your integration before going live
2. **Keep API keys secure**: Never expose your secret key in client-side code or repositories
3. **Implement proper error handling**: Gracefully handle payment errors in your checkout process
4. **Verify transactions**: Always verify payment status on your server before fulfilling orders
5. **Display payment options clearly**: Inform customers about available payment methods
6. **Set up webhooks**: Configure webhook notifications to receive real-time payment status updates
7. **Monitor dashboard**: Regularly check your Mamo Pay dashboard for transaction status and analytics
8. **Maintain transaction records**: Keep proper records of all transactions for accounting purposes
