---
sidebar_position: 3
---

# How to Connect a Custom Domain to Your eCommerce Store

eCommerce allows you to either connect your custom domain or change your eCommerce store URL (**.biz.cyou** connected store URL).

You can build your store's online presence with a distinctive domain, such as **yourstore.com**, instead of **yourstore.biz.cyou**.

By connecting a custom domain, you can create a memorable online presence and make it easy for buyers to locate your store online.

## Connect custom domain to your eCommerce store

:::note
To connect your domain to your eCommerce store, you need to be in a paid plan. Learn more about **eCommerce's pricing plans**.
:::

When you purchase a domain, you acquire a root domain, for example, **yourstore.com**. Additionally, you have the option to create subdomains like **www.yourstore.com** or **shop.yourstore.com**, with **yourstore.com** serving as the root domain and **www** or **shop** acting as the subdomain. Before you can add a subdomain, it is necessary to first obtain a root domain.

To connect a custom domain to your eCommerce store, you need to add a new CNAME record for the domain you decided on to your DNS provider and point it at the domain **"yourstore.biz.cyou"**

### On eCommerce's admin panel:

1. **Log in** to your eCommerce admin panel and navigate to the **Settings** page.
2. From the left-hand menu, select **Domain**.
3. Click on the **Connect** button under the **Custom domain** section.
4. Here, write down your domain and hit the **Save** button.

### On your DNS provider:

1. Identify your DNS provider and access its settings.
2. Add a CNAME record where your DNS provider is located.
3. Configure the CNAME record to point to "**yourstore.biz.cyou**".
4. Additionally, create another CNAME record specifically for the **"www"** subdomain.
5. Configure this new CNAME record to point to the desired domain for your store, e.g., "**yourstore.com**"

By following these steps, you will successfully add your custom domain to your online store.

:::note
After completing the process, please be aware that it may take 24-72 hours for the changes to fully propagate across the Internet. This delay is due to the time required for DNS changes to be updated and recognized.
:::

It's an example of DNS setup through Cloudflare. This is how your DNS setup should look like:

![connect custom domain to eCommerce store](https://example.com/path/to/image.png)

:::caution
To ensure proper website accessibility, sellers are advised to verify their DNS configuration by including a CNAME or A record for the "www" subdomain and confirm that their web server is configured to handle requests for both the root domain and the "www" subdomain. Additionally, it is crucial to ensure that the SSL/TLS certificate covers both the root domain and the "www" subdomain to avoid any host errors.
:::

:::warning
**Regarding IP addresses,** it's important to note that we do not provide support for A records that rely on our IP address. The reason behind this is that we cannot guarantee the stability of our IP address, and any changes to it could potentially disrupt your domain forwarding unexpectedly.

**Regarding nameservers,** it's important to understand their role when working with your custom domain provider. It is recommended to use the default nameservers provided by your custom domain provider for hosting your domain. By doing so, your domain will be hosted by them while we handle the hosting of your store.
:::

## Change your eCommerce store URL (yourstore.biz.cyou)

If you're looking to update your store name in biz.cyou, it's a quick and simple process. Just follow the steps below to get started:

- Log in to your biz.cyou account and navigate to the **"Settings"** page.
- From the left-hand menu, select **"Domain"**
- Next to your current store name, click the **"Edit"** button.
- In the popup window that appears, update your **.biz.cyou** connected store URL with your desired store name.
- Click the **"Save"** button to apply the changes.
