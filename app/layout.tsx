import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default:
      'M360ict ERP | Smart Financial Management & Business Automation Software',
    template: '%s | M360ict ERP',
  },
  icons: {
    icon: '/erp_logo.png',
    shortcut: '/erp_logo.png',
    apple: '/erp_logo.png',
  },
  metadataBase: new URL('https://v2.erpbd.online/login'),
  description:
    'M360ict ERP software - Smart financial control, invoice management, payroll automation, accounts receivable, and business analytics. Real-time dashboards, collection tracking, client management, and expense control for growing businesses.',
  keywords: [
    'M360ict ERP',
    'ERP software',
    'enterprise resource planning',
    'financial management system',
    'invoice management software',
    'payroll system',
    'accounts receivable software',
    'collection management',
    'business dashboard',
    'expense tracking software',
    'client management system',
    'cheque management software',
    'M360ict accounting software',
    'ERP for small business',
    'financial control software',
    'billing software',
    'quotation management',
    'subscription billing',
    'loan investment tracking',
    'business automation',
    'financial reporting tools',
    'ERP implementation',
    'business management solution',
  ],
  alternates: {
    canonical: '',
  },
  authors: [{ name: 'M360ict', url: 'https://m360ict.com' }],
  creator: 'M360ict',
  publisher: 'M360ict ERP',
  applicationName: 'M360ict ERP',
  category: 'Business Software',
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'M360ict ERP | Smart Financial Management & Business Automation',
    description:
      'M360ict ERP platform featuring real-time financial dashboards, invoice management, payroll automation, collection tracking, and comprehensive business analytics for financial control and daily operations.',
    type: 'website',
    locale: 'en_US',
    siteName: 'M360ict ERP',
    images: [
      {
        url: '/erp.png',
        width: 1200,
        height: 800,
        alt: 'M360ict ERP financial dashboard with collection, expense, profit analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M360ict ERP | Financial Control & Business Management',
    description:
      'M360ict Smart ERP with invoice billing, payroll, collection tracking, client management, and financial reporting for your business.',
    images: ['/erp.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-lang='en' suppressHydrationWarning>
      <head>
        <Script
          id='organization-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'M360ict ERP',
              url: '',
              logo: '/erp_logo.png',
              description:
                'M360ict ERP - Smart financial management and business automation software',
              sameAs: [
                'https://www.facebook.com/m360ict',
                'https://www.linkedin.com/company/m360ict',
              ],
            }),
          }}
        />
        <Script
          id='software-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'M360ict ERP',
              description:
                'Smart ERP software for financial control, invoice management, payroll, and business analytics',
              url: '',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '127',
              },
            }),
          }}
        />
      </head>
      <body>
        <Script id='persist-language' strategy='beforeInteractive'>
          {`
            (function () {
              try {
                var savedLanguage = window.localStorage.getItem('site-language');
                var language = savedLanguage === 'bn' ? 'bn' : 'en';
                document.documentElement.lang = language;
                document.documentElement.setAttribute('data-lang', language);
              } catch (error) {}
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
