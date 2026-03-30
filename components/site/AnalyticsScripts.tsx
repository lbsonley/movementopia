import Script from "next/script";

export function AnalyticsScripts() {
  return (
    <>
      {/* MailerLite universal embed script used by the home page form */}
      <Script id="mailerlite-universal" strategy="beforeInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1982575');
        `}
      </Script>

      {/* Google Analytics (gtag) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9BFP7YKCT7"
        async
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9BFP7YKCT7');
        `}
      </Script>
    </>
  );
}

