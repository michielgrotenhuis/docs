---
sidebar_position: 4
---

# Paystack Overview

[Paystack](https://paystack.com/) is one of the leading payment solutions for businesses in Kenya, Nigeria, Ghana, and South Africa to receive payments and make payouts seamlessly.

Paystack allows businesses to accept secure card, bank, and mobile money payments from multiple local and global payment channels.

With Paystack, you can also create a Payment Page and share that link via SMS, Instagram DM, WhatsApp chat, or however you communicate with your customers to get paid.

Paystack is able to process payments from MasterCard, Visa, and Verve cards issued anywhere in the world. For Nigeria and South Africa-based businesses, Paystack is also able to process American Express cards.

## Payment Methods Supported

When you enable Paystack for eCommerce, you can accept payments via:

- **Credit/Debit Cards** – Visa, Mastercard, Verve (Nigeria, Ghana), American Express (Nigeria and South Africa)
- **Bank transfer** (Nigeria)
- **Mobile money** (Ghana)
- **Masterpass** (South Africa)
- **EFT** (South Africa)
- **USSD** (Nigeria)
- **Visa QR** (Nigeria)

You can [sign up on Paystack](http://paystack.com/signup) to get started.

## How to Set Up Paystack Payment Gateway

1. Log in to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Paystack**" as your payment provider (if not available, see the [Paystack isn't available with your store currency](#paystack-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" from your Paystack account, then click on the **Submit** button

You can also enable the Sandbox mode to test the key:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Paystack payment method at the checkout

## Paystack Supported Currencies

By default, international payments are charged and settled to you in your local currency.

For more information on receiving international payments in USD, please refer to the article: [Can I accept payments in USD?](https://support.paystack.com/hc/en-us/articles/360009973799-Can-I-accept-payments-in-USD-)

| **Country** | **CURRENCY CODE** |
|-------------|-------------------|
| **Ghana**   | **GHS**           |
| **Nigeria** | **NGN, USD**      |
| **South Africa** | **ZAR**      |
| **Kenya**   | **KES, USD**      |

## Paystack Isn't Available with Your Store Currency

If Paystack payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Paystack supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Paystack supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Paystack Transaction Fees

Paystack charges transaction fees that vary by country and payment method. Here's a general overview:

- **Card payments**: typically range from 1.5% + fixed fee to 3.9% + fixed fee
- **Local payment methods**: typically have different fee structures based on the specific method and country

For the most current and accurate fee information, please check the [Paystack pricing page](https://paystack.com/pricing).

## Benefits of Using Paystack

### For Nigerian Businesses
- Seamless integration with local banks
- Support for multiple payment methods including USSD and bank transfers
- Settlement in NGN or USD options

### For Ghanaian Businesses
- Mobile money integration (MTN, Vodafone, AirtelTigo)
- Card payments in GHS
- Local settlement options

### For South African Businesses
- Support for instant EFT payments
- Masterpass integration
- Card payments in ZAR

### For Kenyan Businesses
- M-Pesa integration
- Card payments in KES or USD
- Local settlement options

## Best Practices When Using Paystack

1. **Test thoroughly**: Always test your integration in the sandbox environment before going live
2. **Keep keys secure**: Never expose your secret key in client-side code or repositories
3. **Implement webhooks**: Set up webhooks to receive real-time notifications about transaction events
4. **Verify transactions**: Always verify transactions on your server before fulfilling orders
5. **Update API libraries**: Keep your Paystack integration up to date with the latest API versions
6. **Monitor transactions**: Regularly check your Paystack dashboard to track transactions and identify issues
