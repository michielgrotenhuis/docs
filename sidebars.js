/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      items: [
        'getting-started/what-is-ecommerce',
        'getting-started/setup-store',
        'getting-started/billing-subscription',
        'getting-started/faq',
        'getting-started/contact',
      ],
    },
    {
      type: 'category',
      label: 'Store Configuration',
      link: {
        type: 'doc',
        id: 'store-configuration/index',
      },
      items: [
        'store-configuration/domain-setup',
        'store-configuration/currency-setup',
        'store-configuration/branding',
        'store-configuration/navigation',
        'store-configuration/pages',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      link: {
        type: 'doc',
        id: 'products/index',
      },
      items: [
        'products/creating-products',
        'products/product-collections',
        'products/inventory-management',
        'products/price-rounding',
        'products/locations',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      link: {
        type: 'doc',
        id: 'payments/index',
      },
      items: [
        'payments/cash-on-delivery',
        {
          type: 'category',
          label: 'Payment Gateways',
          collapsed: true,
          items: [
            'payments/paypal',
            'payments/stripe',
            'payments/paystack',
            'payments/flutterwave',
            'payments/mercado-pago',
            'payments/razorpay',
            'payments/mamo-pay',
            'payments/yoco',
            'payments/nets-easy',
            'payments/vipps',
            'payments/mollie',
            'payments/epoint',
            'payments/iyzico',
            'payments/payriff',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Shipping',
      link: {
        type: 'doc',
        id: 'shipping/index',
      },
      items: [
        'shipping/shipping-rules',
        'shipping/shipping-methods',
        'shipping/local-pickup',
        {
          type: 'category',
          label: 'Shipping Providers',
          collapsed: true,
          items: [
            'shipping/courier-guy',
            'shipping/myparcel',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Taxes',
      link: {
        type: 'doc',
        id: 'taxes/index',
      },
      items: [
        'taxes/tax-rates',
      ],
    },
    {
      type: 'category',
      label: 'Marketing',
      link: {
        type: 'doc',
        id: 'marketing/index',
      },
      items: [
        'marketing/marketing-tools',
        'marketing/google-analytics',
        'marketing/meta-pixel',
        'marketing/tiktok-pixel',
        'marketing/google-tag-manager',
      ],
    },
    {
      type: 'category',
      label: 'Store Management',
      link: {
        type: 'doc',
        id: 'store-management/index',
      },
      items: [
        'store-management/general-settings',
        'store-management/maintenance-mode',
        'store-management/staff-permissions',
        'store-management/social-profiles',
        'store-management/legal-pages',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      link: {
        type: 'doc',
        id: 'account/index',
      },
      items: [
        'account/pause-store',
        'account/cancel-subscription',
        'account/password-reset',
      ],
    },
  ],
};

module.exports = sidebars;
