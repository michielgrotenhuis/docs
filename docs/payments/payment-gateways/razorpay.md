---
sidebar_position: 7
---

# Razorpay Overview

[Razorpay](https://razorpay.com/) is the only converged payments solution company in India that enables businesses to accept, process, and disburse payments through its product suite. Only Zoho Inventory users in the Indian edition will be able to integrate with Razorpay.

If you are an eligible, registered business with a valid store, you can accept international payments made using cards issued by domestic banks or foreign banks and [PayPal](https://razorpay.com/docs/payments/payment-methods/wallets/paypal/).

If you are an individual, such as a freelancer, you must integrate PayPal to accept international payments.

## How to Set Up Razorpay Payment Gateway for eCommerce Store

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**Razorpay**" (if not available, see the [Razorpay isn't available with your store currency](#razorpay-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**API Key**" and "**Secret Key**" from your Razorpay account, then click on the **Submit** button

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the **More options** on the same page, and click on the toggle to enable the Sandbox mode
2. Write down the same keys to the "**Test Secret key**" and "**Test API key**" input boxes to test the Razorpay payment method at the checkout

## Razorpay Supported Currencies

You can accept payments from your customers in more than 100 foreign currencies using Razorpay's Payment Gateway and other products such as Payment Pages, Payment Button, Payment Links and Invoices.

Currently, Razorpay supports a host of currencies, including INR, USD, EUR, and SGD.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| Indian Rupee | INR |
| United States Dollar | USD |
| Euro | EUR |
| Singapore Dollar | SGD |

You can download the [complete list of Razorpay supported currencies](https://razorpay.com/docs/build/browser/assets/images/international-currency-list.xlsx) (Last updated on 13 April 2023).

Check the latest here: [Razorpay supported currencies](https://razorpay.com/docs/payments/payments/international-payments/#supported-currencies).

## Razorpay Isn't Available with Your Store Currency

If Razorpay payment isn't available due to your store currency, you cannot select this payment provider. To resolve this issue, you need to change your store's currency to one that Razorpay supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that Razorpay supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of Razorpay

### Payment Acceptance

Razorpay offers a variety of payment options specifically tailored for the Indian market:

- **Cards**: Debit cards, credit cards, international cards
- **UPI**: All major UPI apps including Google Pay, PhonePe, Paytm
- **Netbanking**: 50+ banks in India
- **Wallets**: Major digital wallets including Amazon Pay, Mobikwik
- **EMI**: Card EMI and cardless EMI options
- **International Payments**: Accept payments in 100+ currencies
- **Pay Later**: BNPL options like LazyPay, Simpl

### Business Tools

Beyond payment acceptance, Razorpay offers various business tools:

- **Dashboard**: Comprehensive reporting and analytics
- **Route**: Automate bank transfers and reconciliation
- **X**: Business banking and current account
- **Payroll**: Automate salary payments and compliance
- **Capital**: Access to business loans and credit
- **RazorpayX Tax**: Automate tax payments and compliance

### Security Features

Razorpay maintains robust security standards:

- PCI-DSS Level 1 compliance
- 3D Secure authentication
- Fraud detection and prevention
- Secure data encryption
- Tokenization of sensitive payment information

## Best Practices for Using Razorpay

1. **Enable popular payment methods**: Offer UPI, cards, and netbanking for Indian customers
2. **Set up international payments**: Configure international currency acceptance if serving global customers
3. **Test thoroughly**: Use the sandbox mode to test all integration aspects before going live
4. **Implement webhooks**: Set up webhook notifications to receive real-time payment status updates
5. **Keep credentials secure**: Never expose API keys or other sensitive credentials in client-side code
6. **Verify transactions server-side**: Always verify payment completion on your server before fulfilling orders
7. **Handle refunds properly**: Set up a systematic process for managing refunds and cancellations
8. **Monitor analytics**: Regularly review payment analytics to identify trends and potential issues
