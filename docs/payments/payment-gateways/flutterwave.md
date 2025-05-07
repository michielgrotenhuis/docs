---
sidebar_position: 5
---

# Flutterwave Overview

Flutterwave is a payment gateway that is supported in Nigeria, Ghana, Kenya, South Africa, Uganda, Tanzania, United States, United Kingdom, and the rest of Europe.

In addition to the local cards of these countries/regions, Flutterwave also allows you to receive payments from all MasterCard and Visa Cards.

## How to Set Up Flutterwave Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Flutterwave**" as your payment provider (if not available, see the [Flutterwave isn't available with your store currency](#flutterwave-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" from your Flutterwave account, then click on the **Submit** button

### Acquiring an API Key for Initial Setup

1. Navigate to the Settings area of your Flutterwave dashboard
2. Choose the Developers tab and select API Keys. This section displays your Test API Keys and Live Public Keys
3. Click on **Generate Secret Key** to obtain your live Secret key. An authentication code will be dispatched to your email address
4. Input the 7-digit authentication code received in your email

### If You Already Have an API Key and Wish to Generate New Ones

1. Go to the Settings section in your Flutterwave dashboard
2. Navigate to the API keys option under the Developers tab
3. Click on **Generate secret key** to obtain live API keys
4. Choose the desired expiration period for your current API keys
5. Enter the 7-digit authentication code that was sent to you and click on **Generate new API keys**

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the key:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Flutterwave payment method at the checkout

## Flutterwave Supported Currencies

Flutterwave supports the following currencies:

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| United States Dollar | USD |
| British Pound Sterling | GBP |
| Canadian Dollar | CAD |
| Central African CFA Franc | XAF |
| Chilean Peso | CLP |
| Colombian Peso | COP |
| Egyptian Pound | EGP |
| SEPA | EUR |
| Ghanaian Cedi | GHS |
| Guinean Franc | GNF |
| Kenyan Shilling | KES |
| Malawian Kwacha | MWK |
| Moroccan Dirham | MAD |
| Nigerian Naira | NGN |
| Rwandan Franc | RWF |
| Sierra Leonean Leone | SLL |
| São Tomé and Príncipe dobra | STD |
| South African Rand | ZAR |
| Tanzanian Shilling | TZS |
| Ugandan Shilling | UGX |
| West African CFA Franc BCEAO | XOF |
| Zambian Kwacha | ZMW |

For the latest list, check out the [currencies you can charge cards in Flutterwave](https://flutterwave.com/tz/support/general/what-are-the-currencies-accepted-on-flutterwave).

## Flutterwave Isn't Available with Your Store Currency

If Flutterwave payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Flutterwave supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Flutterwave supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Flutterwave

### Multiple Payment Options

Flutterwave offers a variety of payment methods tailored to different regions:

- **Card Payments**: Accept Visa, Mastercard, and local cards across Africa and beyond
- **Mobile Money**: Integrate with popular mobile money services across multiple African countries
- **Bank Transfers**: Support for direct bank transfers in supported countries
- **USSD**: Offer payment via USSD codes for users without smartphones or internet
- **QR Payments**: Enable contactless payments through QR code scanning

### Regional Specialization

Flutterwave has specific features for different regions:

- **Nigeria**: Support for local payment methods like USSD and bank transfers
- **Kenya**: Integration with M-Pesa and other mobile money services
- **Ghana**: Support for mobile money networks like MTN, Vodafone, and AirtelTigo
- **South Africa**: Integration with local banking systems and payment methods
- **Tanzania/Uganda**: Support for local mobile money services

### Security and Compliance

Flutterwave maintains high security standards:

- PCI DSS Level 1 compliance
- 3D Secure authentication
- Anti-fraud monitoring and protection
- Data encryption and security

## Best Practices for Using Flutterwave

1. **Test thoroughly**: Always test your integration in the sandbox environment before going live
2. **Implement webhook notifications**: Set up webhooks to receive real-time updates on payment status
3. **Handle currency conversion appropriately**: Be clear about which currencies you accept and how conversion works
4. **Keep your API keys secure**: Never expose your secret key in client-side code
5. **Display appropriate payment methods**: Show payment options relevant to your customer's location
6. **Regularly verify transaction status**: Always confirm payment status before fulfilling orders
7. **Stay updated**: Keep up with Flutterwave's API documentation for new features and changes
