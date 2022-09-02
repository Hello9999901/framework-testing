import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy="beforeInteractive">
            {`
            console.log("dark mode selector up and running");
            // initial check to see if there is a config for dark-theme
            // if not, it will match the variable to the configuration theme.
            if (window.localStorage.getItem('dark-theme') == null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem('dark-theme', true);
            }
            else {
                window.localStorage.setItem('dark-theme', false);
            }
            `}
        </Script>
      </body>
    </Html>
  )
}