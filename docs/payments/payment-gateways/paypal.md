---
sidebar_position: 1
---

# PayPal Overview

PayPal is a popular payment provider that allows you to accept payments in your online store. With PayPal, you can receive payments from a variety of sources, including credit and debit cards, bank transfers, and PayPal balances.

- To use PayPal in your store, you will need to create a PayPal account and connect it to your online store.

- PayPal's fees begin at 3.49% + $0.49 per transaction. PayPal's fees vary depending on your location and the type of transaction. Find more information about [PayPal fees](https://www.paypal.com/us/webapps/mpp/merchant-fees).

- [PayPal's FAQs](https://www.paypal.com/tc/webapps/mpp/shop/faq).

## How to set up PayPal payment gateway?

1. **Log in** to your eCommerce admin panel.
2. Navigate to the *Settings → Payments* in your admin panel.
3. Click on the "Add payment method" anchor text.
4. If available with your store currency, select "PayPal" as your payment provider (if not available, **follow these steps**).
5. Here, on the "Enable payment method" section, click on the toggle to enable the payment method.
6. Next, enter the [**"Public Key" and "Secret Key"**](https://www.paypal.com/merchantapps/appcenter/streamlineoperations/apicredentials) from your PayPal account, then click on the Submit button.

You can also enable the Sandbox mode to test the keys. For this:

1. Click on the "More options" on the same page.
2. Enable the Sandbox mode toggle.
3. Write down the same keys to the "Test Public key" and "Test Secret key" input box.

## PayPal supported currencies

[PayPal supports a wide range of currencies](https://developer.paypal.com/docs/reports/reference/paypal-supported-currencies/) for processing payments. The list of supported currencies varies depending on the country where your PayPal account is registered.

Here is a non-exhaustive list of some of the currencies that PayPal currently supports:

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| **Australian dollar** | **AUD** |
| **Brazilian real ²** | **BRL** |
| **Canadian dollar** | **CAD** |
| **Chinese Renmenbi ³** | **CNY** |
| **Czech koruna** | **CZK** |
| **Danish krone** | **DKK** |
| **Euro** | **EUR** |
| **Hong Kong dollar** | **HKD** |
| **Hungarian forint ¹** | **HUF** |
| **Israeli new shekel** | **ILS** |
| **Japanese yen ¹** | **JPY** |
| **Malaysian ringgit ³** | **MYR** |
| **Mexican peso** | **MXN** |
| **New Taiwan dollar ¹** | **TWD** |
| **New Zealand dollar** | **NZD** |
| **Norwegian krone** | **NOK** |
| **Philippine peso** | **PHP** |
| **Polish złoty** | **PLN** |
| **Pound sterling** | **GBP** |
| **Russian ruble** | **RUB** |
| **Singapore dollar** | **SGD** |
| **Swedish krona** | **SEK** |
| **Swiss franc** | **CHF** |
| **Thai baht** | **THB** |
| **United States dollar** | **USD** |

**❗️PayPal's note:**

1. *This currency does not support decimals. If you pass a decimal amount, an error occurs.*
2. *This currency is supported as a payment currency and a currency balance for in-country PayPal accounts only. If the receiver of funds is not from Brazil, then PayPal converts funds into the primary holding currency of the account with the applicable currency conversion rate. The currency conversion rate includes PayPal's applicable spread or fee.*
3. *This currency is supported as a payment currency and a currency balance for in-country PayPal accounts only.*

## PayPal isn't available with your store currency

If PayPal payment isn't available due to your store currency, you cannot select this payment provider. For this, you need to change your store's currency.

Learn more about **"[Setting up a currency for your online store](../../store-setup/setting-up-currency)"**.

To change your store's currency:

- Head to the *Settings → General* in your eCommerce admin panel.
- Click on the "Standards and formats" settings.
- From the Currency dropdown, menu select the currency that PayPal supports.

Read more about **"[payment gateway doesn't support your currency](../payment-methods#payment-gateway-isnt-available-in-your-store)"**.
