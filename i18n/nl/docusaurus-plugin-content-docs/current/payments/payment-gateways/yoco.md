---
sidebar_position: 9
---

# Yoco Overview

Yoco is one of South Africa's largest financial platforms for small businesses.

One notable advantage is that there are no upfront costs associated with the [Yoco Payment Gateway](https://www.yoco.com/za/yoco-gateway/). Once activated, the gateway seamlessly integrates with all of Yoco's payment solutions, ensuring a unified and comprehensive payment experience for merchants.

Yoco's Payment Gateway offers no upfront, monthly, or payout fees, making it a cost-effective choice for businesses. Card transaction fees start at 2.95% ex. VAT, while EFT fees start from 2% ex. VAT. Learn more about fees on [Yoco's pricing page](https://www.yoco.com/za/fees/).

With daily payouts, quick sign-up, and on-site integrated payments, Yoco provides a seamless and efficient solution for both online and in-store sales. Additionally, Yoco's system is 3D Secure and PCI compliant, ensuring secure transactions for you and your customers.

With Yoco, you can accept all MasterCard and VISA debit and credit cards. This includes international cards, swipe cards, chip and PIN, and SASSA cards issued from any bank. Unfortunately, they don't currently accept Fleet / RCS / Diners / AMEX / Petrol cards. See more [here](https://support.yoco.help/s/article/Which-cards-do-Yoco-card-machines-accept).

The Yoco Payment Gateway is a feature accessible to all Yoco customers, and its activation process takes place directly within the [Yoco Business Portal](https://portal.yoco.co.za/). For new customers, the option to enable online payments is available during the sign-up process. Once the integration process is successfully completed, customers can immediately begin processing transactions.

## How to Set Up Yoco Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Yoco**" as your payment provider (if not available, see the [Yoco isn't available with your store currency](#yoco-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" from your Yoco account, then click on the **Submit** button

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the key:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Yoco payment method at the checkout

## Yoco Supported Currencies

Yoco only accepts payments in South African Rands (ZAR). This means that goods or services need to be listed in ZAR on your store. Customers can pay with an international card, but because Yoco accepts ZAR only, the customer's bank will do an automatic currency conversion from the customer's home currency into ZAR.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| South African Rands | ZAR |

## Yoco Isn't Available with Your Store Currency

If Yoco payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Yoco supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Yoco supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Yoco Gateway

### South African-Focused Payment Solution

Yoco offers specialized features for South African merchants:

- **Local Currency Processing**: All transactions in ZAR
- **South African Bank Integration**: Direct settlement to South African bank accounts
- **Daily Settlements**: Funds deposited daily to your bank account
- **EFT Payments**: Support for local electronic funds transfers
- **Local Support**: South Africa-based customer support team

### Payment Methods

Yoco supports various payment methods for South African customers:

- **Credit Cards**: All major credit cards (Visa, Mastercard)
- **Debit Cards**: South African and international debit cards
- **EFT**: Electronic funds transfer option
- **SASSA Cards**: Support for South African Social Security Agency cards
- **International Cards**: Accept payments from international visitors

### Business Tools

Beyond payment processing, Yoco offers:

- **Business Portal**: Comprehensive dashboard for tracking sales
- **Transaction Reports**: Detailed reporting and analytics
- **Integration Options**: API, payment links, and plugins
- **In-Store Solutions**: Card machines for physical retail
- **Business Insights**: Tools to help grow your business

## Best Practices for Using Yoco

1. **Display pricing in ZAR**: Ensure all your products are priced in South African Rands
2. **Test thoroughly**: Use the sandbox mode to test your integration before going live
3. **Keep keys secure**: Never expose your secret key in client-side code or repositories
4. **Implement proper error handling**: Gracefully handle payment errors in your checkout flow
5. **Verify transactions**: Always confirm payment status before fulfilling orders
6. **Reconcile regularly**: Regularly reconcile transactions with your bank account
7. **Display payment methods**: Clearly show which cards and payment methods you accept
8. **Update integration**: Keep your integration up to date with the latest Yoco API
9. **Consider mobile experience**: Optimize the checkout process for mobile users
10. **Set expectations**: Clearly communicate processing times and settlement schedules to customers

## Troubleshooting Common Issues

### Payment Failures

If customers experience payment failures with Yoco, check for these common issues:

1. **Insufficient funds**: The customer's card may not have enough funds
2. **Card restrictions**: Some cards have online payment restrictions
3. **3D Secure failure**: The customer may have failed the 3D Secure authentication
4. **Connection issues**: Poor internet connection can interrupt the payment process
5. **Expired card**: The customer may be using an expired card

### Integration Issues

Common integration problems include:

1. **Incorrect API key**: Double-check your Secret Key
2. **Currency mismatch**: Ensure your store is set to use ZAR
3. **Webhook configuration**: Ensure webhooks are properly configured
4. **Test/Live mode confusion**: Make sure you're using the correct mode
5. **Browser compatibility**: Test on different browsers to ensure compatibility

For any technical issues with your Yoco integration, contact Yoco support at support@yoco.com or visit the [Yoco Help Center](https://help.yoco.com/).

## Conclusion

Yoco provides a reliable payment solution specifically designed for South African businesses. By properly setting up and maintaining your Yoco integration with eCommerce, you can offer your customers a seamless checkout experience while benefiting from Yoco's competitive rates and local support.