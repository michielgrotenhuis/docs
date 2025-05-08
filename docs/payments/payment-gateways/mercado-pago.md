---
sidebar_position: 6
---

# Mercado Pago Overview

[Mercado Pago](https://www.mercadopago.com.ar/) is the biggest online payment platform in Latin America, allowing users to conveniently send and receive money via multiple means of payment.

Mercado Pago is supported and present in seven countries: Argentina, Brazil, Chile, Colombia, Mexico, Peru, and Uruguay, and it supports the local currency of each country. Mercado Pago allows you to accept payments from different sources in your local currency.

## How to Set Up Mercado Pago Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Mercado Pago**" as your payment provider (if not available, see the [Mercado Pago isn't available with your store currency](#mercado-pago-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Public Key**" and "**Access Token**" from your Mercado Pago account, then click on the **Submit** button

You can find the credentials from *Your Business › Settings › Management and Administration › Credentials* in your Mercado Pago account.

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**test Secret key**" input box to test the Mercado Pago payment method at the checkout

## Mercado Pago Supported Currencies

Currently, Mercado Pago only accepts payments in the local currency of each supported country. This means that if you have an account in Argentina, you can only receive payments in Argentine Peso (ARS) from clients who also have an account in Argentina.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Argentine Peso | ARS |
| Brazilian Real | BRL |
| Chilean Peso | CLP |
| Colombian Peso | COP |
| Mexican Peso | MXN |
| Peruvian Sol | PEN |
| Uruguayan Peso | UYU |

## Mercado Pago Isn't Available with Your Store Currency

If Mercado Pago payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Mercado Pago supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Mercado Pago supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Mercado Pago

### Payment Methods

Mercado Pago offers a variety of payment options for customers in Latin America:

- **Credit Cards**: Accept all major credit cards including Visa, Mastercard, American Express
- **Debit Cards**: Support for local and international debit cards
- **Bank Transfers**: Direct transfers from customers' bank accounts
- **Cash Payments**: Options for customers to pay in cash at various retail locations
- **Installment Payments**: Support for installment payment plans common in Latin America
- **Mercado Pago Balance**: Allow payments from existing Mercado Pago accounts

### Country-Specific Features

- **Argentina**: Rapipago, Pago Fácil, and other cash payment options
- **Brazil**: Boleto Bancário, bank transfers, PIX
- **Mexico**: OXXO, SPEI bank transfers
- **Chile**: Webpay, Servipag
- **Colombia**: Efecty, Baloto
- **Peru**: PagoEfectivo, SafetyPay
- **Uruguay**: Abitab, RedPagos

### Security Features

Mercado Pago maintains strong security standards:

- PCI DSS Level 1 compliance.
- Fraud detection and prevention.
- Chargeback protection.
- 3D Secure authentication.
- Tokenization of sensitive payment information.

## Best Practices for Using Mercado Pago

1. **Enable local payment methods**: Offer payment options that are popular in your target market
2. **Set up installment options**: Provide installment payment plans where available to increase conversions
3. **Implement checkout transparency**: Clearly display accepted payment methods and installment options
4. **Test thoroughly**: Use sandbox mode to test all aspects of your integration before going live
5. **Keep credentials secure**: Never expose access tokens or other sensitive credentials in client-side code
6. **Implement webhook notifications**: Set up webhooks to receive real-time updates on payment status
7. **Regular reconciliation**: Regularly reconcile payments in your Mercado Pago dashboard with your store orders
8. **Stay updated**: Keep your integration up to date with the latest Mercado Pago API versions
