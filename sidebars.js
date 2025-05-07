/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/getting-started-index',
      },
      items: [
        'getting-started/what-is-ecommerce',
        'getting-started/setup-ecommerce-store',
        'getting-started/billing-subscription',
        'getting-started/faq',
        'account/contact', // Your contact file is in account/ instead of getting-started/
      ],
    },
    {
      type: 'category',
      label: 'Store Configuration',
      items: [
        'store-setup/connect-custom-domain',
        'store-setup/setting-up-currency',
        'store-setup/branding',
        'store-setup/navigation-menus',
        'store-setup/pages',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      link: {
        type: 'doc',
        id: 'products/products-index',
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
        id: 'payments/payments-index',
      },
      items: [
        'payments/payment-methods',
        'payments/cash-on-delivery',
        {
          type: 'category',
          label: 'Payment Gateways',
          collapsed: true,
          items: [
            'payments/payment-gateways/paypal',
            'payments/payment-gateways/stripe',
            'payments/payment-gateways/paystack',
            'payments/payment-gateways/flutterwave',
            'payments/payment-gateways/mercado-pago',
            'payments/payment-gateways/razorpay',
            'payments/payment-gateways/mamo-pay',
            'payments/payment-gateways/yoco',
            'payments/payment-gateways/nets-easy',
            'payments/payment-gateways/vipps',
            'payments/payment-gateways/mollie',
            'payments/payment-gateways/epoint',
            'payments/payment-gateways/iyzico',
            'payments/payment-gateways/payriff',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Shipping',
      link: {
        type: 'doc',
        id: 'shipping/shipping-index',
      },
      items: [
        'shipping/creating-shipping-rules',
        'shipping/shipping-methods',
        'shipping/local-pickup',
        {
          type: 'category',
          label: 'Shipping Providers',
          collapsed: true,
          items: [
            'shipping/shipping-methods/courier-guy',
            'shipping/shipping-methods/myparcel',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Taxes',
      link: {
        type: 'doc',
        id: 'taxes/taxes-index',
      },
      items: [
        'taxes/creating-tax-rates',
      ],
    },
    {
      type: 'category',
      label: 'Marketing',
      link: {
        type: 'doc',
        id: 'marketing/marketing-index',
      },
      items: [
        'marketing/marketing-tools',
        'integrations/google-analytics',
        'integrations/meta-pixel',
        'integrations/tiktok-pixel',
        'integrations/google-tag-manager',
      ],
    },
    {
      type: 'category',
      label: 'Store Management',
      link: {
        type: 'doc',
        id: 'store-management/store-management-index',
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
        id: 'account/account-index',
      },
      items: [
        'account/delete-pause-store',
        'account/cancel-subscription',
        'account/password-reset',
      ],
    },
  ],
};

module.exports = sidebars;
