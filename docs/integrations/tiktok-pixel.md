---
sidebar_position: 5
---

# TikTok Pixel Integration

The TikTok Pixel is a code that you place on your store to track events and measure the impact of TikTok ads on your store. It allows you to monitor sales, user activity, and target the right audience for your ads.

Events refer to specific actions or behaviors that a store visitor takes on your store, such as adding items to a cart or making a purchase. These events help you build marketing audiences, optimize ad delivery, and measure campaign performance.

The TikTok Pixel tracks these events and provides information about when they occur, allowing you to understand user behavior, target specific audiences, and evaluate the effectiveness of your TikTok ads.

The pixel collects Ad/Event information, timestamp, IP Address, User Agent, and Cookies available via standard web browsers, like Chrome.

## How to Add TikTok Pixel to eCommerce Store

If you haven't created the TikTok Pixel yet, follow the steps in the [How to Get Your TikTok Pixel](#how-to-get-your-tiktok-pixel) section below.

To add the TikTok Pixel to your eCommerce store:

1. **Log in** to your eCommerce admin panel
2. Navigate to ***Settings → Integrations***
3. Click on the **Add** button for TikTok Pixel
4. On this page, add your TikTok Pixel ID to the input box
5. Click **Save**

That's it! You've successfully added the TikTok Pixel to your eCommerce store.

## How to Get Your TikTok Pixel

To create a TikTok Pixel, you need to first have a [TikTok Business Account](https://www.tiktok.com/business/en/solutions/business-account).

1. Sign in or register for a [TikTok Business Account](https://www.tiktok.com/business/en/solutions/business-account)
2. Go to **TikTok Ads Manager → Assets → Events**
3. Click on the **Manage** button within the **Website Event** section
4. Click the **Create Pixel** button
5. On the next page, name the pixel something you'll remember
6. Select **Manually Install Pixel Code**

Done! Your TikTok pixel is created.

The TikTok pixel will be located at the end of the script, and the pixel base code will look similar to this:

```html
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
  var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
  var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  ttq.load('XXXXXXXXXXXXXXX');
  ttq.page();
}(window, document, 'ttq');
</script>
```

Your TikTok Pixel ID is the alphanumeric code that appears after `ttq.load('` (shown as `XXXXXXXXXXXXXXX` in the example above).

Read more about the TikTok Pixel on the [TikTok Business Help Center](https://ads.tiktok.com/help/article/get-started-pixel).

## What are TikTok Pixel Events?

An event refers to a specific action or interaction that occurs on the TikTok platform. TikTok events are typically related to user engagement with your TikTok ads or content.

There are **14 types** of TikTok pixel events:

1. Add payment info
2. Add to cart
3. Add to wishlist
4. Click button
5. Complete payment
6. Complete registration
7. Contact
8. Download
9. Initiate checkout
10. Place an order
11. Search
12. Submit form
13. Subscribe
14. View content

Each of these events helps you track different stages of the customer journey, from initial interest to final purchase.

## Test if Your TikTok Pixel is Working Correctly

You can use the [TikTok Pixel Helper](https://ads.tiktok.com/help/article/tiktok-pixel-helper-2.0) to test whether your pixel is working correctly. Pixel Helper provides comprehensive diagnostics for troubleshooting pixel installation. It offers detailed insights into the implementation of pixels, events, and parameters at various levels.

To test the pixel:

1. Add the TikTok Pixel ID to your eCommerce store
2. Install the [TikTok Pixel Helper Chrome extension](https://chrome.google.com/webstore/detail/tiktok-pixel-helper/aelgobmabdmlfmiblddjfnjodalhidnn)
3. Open a new tab in your browser and paste your store link followed by **?dbgrmrktng**  
   For example: `YoureCommerceStore.com/?dbgrmrktng`

The TikTok Pixel Helper will then provide you with information about the status of your pixels. It can also indicate whether your events are functioning correctly and receiving data.

## Benefits of Using TikTok Pixel

### Audience Targeting

- **Custom Audiences**: Create audiences based on website visitors' actions
- **Lookalike Audiences**: Find new users similar to your existing customers
- **Retargeting**: Re-engage users who have visited your site but haven't converted

### Performance Measurement

- **Campaign Attribution**: Track which ads drive which actions
- **Conversion Insights**: See which products and pages convert best
- **ROI Calculation**: Determine return on ad spend for TikTok campaigns

### Ad Optimization

- **Automatic Optimization**: Train TikTok's algorithms to show ads to users most likely to convert
- **Event-Based Bidding**: Optimize campaigns for specific user actions
- **Campaign Refinement**: Get data to improve poorly performing campaigns

By implementing the TikTok Pixel, you can significantly improve your advertising efficiency on TikTok, reaching the right audience with the right message and maximizing your return on investment.
