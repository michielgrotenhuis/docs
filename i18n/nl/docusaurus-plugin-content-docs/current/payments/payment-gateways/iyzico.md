---
sidebar_position: 14
---

# iyzico Overview

[iyzico](https://www.iyzico.com/en) is a payment receipt system management platform that offers ePayment solutions.

iyzico's Protected Bank Transfer allows your customers to make payment through 3 banks while you manage all transactions on a single panel. iyzico offers your customers the privilege of iyzico Buyer protection without paying any extra fee.

iyzico allows you to get paid and sell with installments anywhere in the world easily.

## How to Set Up iyzico Payment Gateway

1. **Log in** to your eCommerce admin panel
2. Navigate to the ***Settings → Payments*** in your admin panel
3. Click on the "**Add payment method**" anchor text
4. If available with your store currency, select "**iyzico**" as your payment provider (if not available, see the [iyzico isn't available with your store currency](#iyzico-isnt-available-with-your-store-currency) section below)
5. In the "**Enable payment method**" section, click on the toggle to enable the payment method
6. Enter the "**Secret Key**" from your iyzico account, then click on the **Submit** button

The Secret Key can be found under the iyzico Control Panel:

Head to your ***Account → Account Settings → API Keys → Live Keys***

### Enable Sandbox Mode for Testing

You can also enable the Sandbox mode to test the keys:

1. Click on the "**More options**" on the same page
2. Enable the Sandbox mode toggle
3. Write down the same key to the "**Test Secret key**" input box

## iyzico Supported Currencies

You can take payments from anywhere in the world in US Dollars, Euros, Great British Sterling, Russian Ruble, Swiss Francs and Norwegian Krone currencies as well as in Turkish Liras through Visa and Mastercard branded cards.

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| US Dollars | USD |
| Euro | EUR |
| Great British Sterling | GBP |
| Russian Ruble | RUB |
| Swiss Francs | CHF |
| Norwegian Krone | NOK |
| Turkish Lira | TRY |

## iyzico Isn't Available with Your Store Currency

If iyzico isn't available due to your store currency, you cannot select the payment provider. To resolve this issue, you need to change your store's currency to one that iyzico supports.

To change your store's currency:

1. Head to the ***Settings → General*** in your eCommerce admin panel
2. Click on the "**Standards and formats**" settings
3. From the Currency dropdown menu, select the currency that iyzico supports
4. Click **Save**

:::caution
If you've already received an order for your online store, you cannot change the currency through the settings. In such cases, please contact eCommerce support (support@eCommerce.com) to request a change in your store currency.
:::

## Key Features of iyzico

### Turkey-Focused Payment Solution

iyzico offers specialized features for the Turkish market while supporting international payments:

- **Turkish Market Integration**: Deep integration with the Turkish financial system
- **International Support**: Accept payments from around the world
- **Multi-Currency Processing**: Support for seven currencies
- **Protected Transfers**: Secure bank transfer system
- **Installment Options**: Popular in Turkish e-commerce

### Payment Methods

iyzico supports various payment methods:

- **Credit/Debit Cards**: Visa, Mastercard, and other major cards
- **Bank Transfers**: Protected bank transfer system
- **Installment Payments**: Split payments over time
- **Mobile Payments**: Support for mobile payment methods
- **Alternative Payment Methods**: Various local options

### Business Tools

Beyond payment processing, iyzico offers:

- **Merchant Dashboard**: Comprehensive transaction management
- **Reporting and Analytics**: Track and analyze your sales
- **Fraud Protection**: Advanced security measures
- **Buyer Protection**: Increased customer confidence
- **API Integration**: Connect with your existing systems

## Best Practices for Using iyzico

1. **Configure currency settings**: Ensure your store uses a currency supported by iyzico
2. **Test thoroughly**: Use sandbox mode to test before going live
3. **Keep credentials secure**: Never expose your secret key in client-side code
4. **Implement proper error handling**: Handle payment errors gracefully
5. **Verify transactions**: Always confirm payment status before fulfilling orders
6. **Enable installment options**: If selling to Turkish customers, consider installment plans
7. **Display payment logos**: Show iyzico and accepted payment methods on your site
8. **Monitor transactions**: Regularly check your iyzico dashboard
9. **Stay updated**: Keep your integration up to date with the latest iyzico API
10. **Provide multilingual support**: Consider supporting Turkish if targeting that market

## Troubleshooting Common Issues

When using iyzico, you might encounter these common issues:

### Integration Problems
- Incorrect API keys
- Unsupported currency
- Invalid checkout configuration

### Payment Failures
- Card declined
- 3D Secure authentication failure
- Insufficient funds
- Card restrictions
- Expired card

### Technical Issues
- Network connectivity problems
- Webhook configuration errors
- Server timeout issues
- Browser compatibility problems
- SSL certificate issues

For technical support with your iyzico integration, contact iyzico support or visit the [iyzico Developer Portal](https://dev.iyzipay.com/).

## Security Considerations

iyzico maintains high security standards to protect both merchants and customers:

### PCI DSS Compliance

iyzico is fully compliant with Payment Card Industry Data Security Standard (PCI DSS), ensuring that all card data is handled according to industry security standards.

### 3D Secure

All card transactions are processed with 3D Secure authentication, providing an additional layer of security and helping to reduce fraudulent transactions.

### Fraud Prevention

iyzico employs advanced fraud detection and prevention systems to identify and block suspicious transactions before they can be processed.

### Data Encryption

All sensitive data transmitted through iyzico is encrypted using industry-standard protocols to ensure that customer information remains secure.

### Transaction Monitoring

iyzico's systems continuously monitor transactions for unusual patterns or activities that might indicate fraud, providing real-time protection for your business.

## Conclusion

iyzico provides a reliable payment solution that's particularly well-suited for businesses selling to Turkey and international markets. By properly setting up and maintaining your iyzico integration with eCommerce, you can offer your customers a secure and convenient checkout experience while benefiting from iyzico's comprehensive payment management system.