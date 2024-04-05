import Script from 'next/script'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D731Y3HESC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'D731Y3HESC');
        `}
      </Script>
    </>
  )
}