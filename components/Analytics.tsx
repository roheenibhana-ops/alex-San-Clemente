import Script from "next/script";

// GA4 defaults to the live property ID; NEXT_PUBLIC_GA_ID overrides it. NEXT_PUBLIC_CF_BEACON enables Cloudflare Web Analytics.
export default function Analytics() {
  const cf = process.env.NEXT_PUBLIC_CF_BEACON;
  const ga = process.env.NEXT_PUBLIC_GA_ID ?? "G-KW8NQ6W52G";
  return (
    <>
      {cf && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cf })}
          strategy="afterInteractive"
        />
      )}
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
    </>
  );
}
