---
sidebar_position: 2
---

# Stripe Overview

Stripe provides a convenient way to receive payments in your eCommerce store using various credit and debit cards like Visa, MasterCard, American Express, and others.

- To use Stripe in your eCommerce store, you'll need both a [eCommerce account](https://accounts.uvodo.com/auth/sign-in) and a [Stripe account](https://stripe.com/docs/connect/required-updates/standard-accounts-guide#verification-requirements)

- [Stripe's fees](https://stripe.com/pricing) begin at 2.9% + $.30 per transaction.

- [Stripe's FAQ](https://support.stripe.com/questions/payouts-faq)

## How to set up Stripe payment for your online store?

1. [Log in](https://accounts.uvodo.com/) to your eCommerce admin panel.
2. Navigate to the *Settings → Payments* in your admin panel.
3. Click on the "Add payment method" anchor text.
4. If available with your store currency, select "Stripe" as your payment provider (if not available, **follow these steps**).
5. Here, on the "Enable payment method" section, click on the toggle to enable the payment method.
6. Next, enter the "[Secret Key](https://stripe.com/docs/keys)" from your Stripe account, then click on the Submit button.

You can also enable the Sandbox mode to test the keys. For this:

1. Click on the "More options" on the same page.
2. Enable the Sandbox mode toggle.
3. Write down the same key to the "Test Secret key" input box.

## Stripe supported currencies

Stripe supports a wide range of currencies for processing payments. The list of supported currencies varies depending on the country where your Stripe account is registered.

Here is a non-exhaustive list of some of the currencies that Stripe currently supports:

| **CURRENCY NAME** | **CURRENCY CODE** |
|-------------------|-------------------|
| **US Dollars** | **USD** |
| **Euro** | **EUR** |
| **Great British Sterling** | **GBP** |
| **Russian Ruble** | **RUB** |
| **Canadian dollar** | **CAD** |
| **Australian dollar** | **AUD** |
| **Japanese yen** | **JPY** |
| **Singapore dollar** | **SGD** |
| **Hong Kong dollar** | **HKD** |
| **New Zealand dollar** | **NZD** |
| **Swiss franc** | **CHF** |
| **Swedish krona** | **SEK** |
| **Danish krone** | **DKK** |
| **Norwegian krone** | **NOK** |
| **Mexican peso** | **MXN** |
| **Brazilian real** | **BRL** |
| **Indian rupee** | **INR** |

To see the complete list of supported currencies in your country, head to the [Stripe's supported currencies documentation](https://stripe.com/docs/currencies?presentment-currency) and select the country where your Stripe account is registered.


## Stripe isn't available with your store currency

If Stripe payment isn't available due to your store currency, you cannot select this payment provider. For this, you need to change your store's currency.

Learn more about "[Setting up a currency for your online store](../../store-domain/setting-up-currency)".

To change your store's currency:

- Head to the *Settings → General* in your eCommerce admin panel.
- Click on the "Standards and formats" settings.
- From the Currency dropdown, menu select the currency that Stripe supports.

Read more about "[payment gateway doesn't support your currency](../payment-methods#payment-gateway-isnt-available-in-your-store)".
