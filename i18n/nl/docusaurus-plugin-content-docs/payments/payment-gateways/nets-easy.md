---
sidebar_position: 10
---

# Nets Easy Overview

[Nets Easy Payments](https://developer.nexigroup.com/nets-easy/en-EU/docs/) enables online merchants throughout Europe to effortlessly accept payments from a wide range of cards as well as the most popular alternative payment methods.

Setting up Nets Easy payments for your eCommerce store is an easy and straightforward process. You just need to set the currency for your store that Nets Easy supports, enable the payment gateway from Settings within clicks, and add the API credentials.

## How to Set Up Nets Easy Payment for eCommerce Store

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Nets Easy**" as your payment provider (if not available, see the [Nets Easy isn't available with your store currency](#nets-easy-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Merchant ID number**" (Public Key) and "**Secret Key**" from your Nets Easy account, then click on the **Submit** button

### Finding Your Secret Key

In your Nets Easy administration, go to Company → Integrations from the left menu. Here, on the Integrations Keys page, you'll see the Secret Key under the Live Environment.

![Nets Easy secret Key](https://example.com/path/to/image.png)

### Finding Your Merchant ID (Public Key)

The identifier for your merchant account, which is also referred to as your Merchant ID.

In your Nets Easy administration dashboard, the Merchants ID is visibly located at the top of the page. The Merchant number solely consists of numerical digits.

![Nets Easy Merchant ID](https://example.com/path/to/image.png)

## Nets Easy Supported Currencies

Nets Easy works in all European countries with the currencies 'DKK', 'EUR', 'GBP', 'NOK', 'SEK', 'USD', 'PLN', 'CHF', 'CZK'.

Read more about [where to find which currencies and payment methods you have](https://developers.nets.eu/nets-easy/en-EU/support/where-can-i-find-which-currencies-and-payment-methods-i-have/#faq-title).

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Danish Krone | DKK |
| Euro | EUR |
| Pound sterling | GBP |
| Norwegian Krone | NOK |
| Swedish Krona | SEK |
| United States Dollar | USD |
| Polish Zloty | PLN |
| Swiss Franc | CHF |
| Czech Koruna | CZK |

## Nets Easy Isn't Available with Your Store Currency

If Nets Easy payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Nets Easy supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Nets Easy supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Nets Easy

### Pan-European Payment Solution

Nets Easy offers comprehensive payment solutions across Europe:

- **Multiple European Countries**: Coverage across Scandinavia and many EU countries
- **Multi-Currency Support**: Accept payments in nine different currencies
- **Local Payment Methods**: Support for country-specific payment options
- **Cross-Border Transactions**: Process payments across European borders
- **Single Integration**: One integration for multiple markets

### Payment Methods

Nets Easy supports a variety of payment methods:

- **Cards**: All major credit and debit cards (Visa, Mastercard, etc.)
- **Mobile Payments**: Support for mobile payment solutions
- **Country-Specific Methods**: Local payment methods for different European countries
- **Alternative Payment Methods**: Digital wallets and other payment options
- **Installment Payments**: Options for splitting payments where supported

### Advanced Features

Nets Easy offers advanced functionality for merchants:

- **Recurring Payments**: Support for subscription and recurring billing
- **One-Click Payments**: Saved card information for faster checkout
- **Split Payments**: Divide payments between multiple recipients
- **Customizable Checkout**: Tailor the checkout experience to your brand
- **Advanced Fraud Prevention**: Built-in security and fraud detection

## Best Practices for Using Nets Easy

1. **Test thoroughly**: Use sandbox mode to test your integration before going live
2. **Keep credentials secure**: Never expose your secret key in client-side code
3. **Implement proper error handling**: Gracefully handle payment errors in your checkout flow
4. **Verify transactions**: Always confirm payment status before fulfilling orders
5. **Display payment options**: Clearly show available payment methods to customers
6. **Optimize for mobile**: Ensure the checkout process works well on mobile devices
7. **Stay updated**: Keep your integration up to date with the latest Nets Easy API
8. **Multi-language support**: Offer checkout in languages appropriate for your target markets
9. **Monitor transactions**: Regularly check your Nets Easy dashboard for transaction status
10. **Set customer expectations**: Clearly communicate payment processing times and policies

## Troubleshooting Common Issues

If you encounter issues with your Nets Easy integration, check for these common problems:

1. **Authentication errors**: Verify your Merchant ID and Secret Key
2. **Currency configuration**: Ensure your store currency matches one supported by Nets Easy
3. **API endpoint issues**: Confirm you're using the correct API endpoints
4. **Webhook configuration**: Check that webhooks are properly set up
5. **Browser compatibility**: Test on different browsers to ensure compatibility

For technical support with your Nets Easy integration, contact Nets support or visit the [Nets Developer Portal](https://developer.nexigroup.com/nets-easy/en-EU/docs/).
