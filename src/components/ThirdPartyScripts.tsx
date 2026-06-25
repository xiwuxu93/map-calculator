import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export default function ThirdPartyScripts() {
  return (
    <>
      <script
        data-grow-initializer=""
        dangerouslySetInnerHTML={{
          __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpmN2NmODhiNy1lMWZmLTRkYjctOTEyMC0zOGM5N2UxOGMwOTk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`
        }}
      />
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {ADSENSE_CLIENT_ID ? (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      ) : null}
    </>
  );
}
