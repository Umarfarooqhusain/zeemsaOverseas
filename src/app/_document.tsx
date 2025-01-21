// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Charset for SEO */}
          <meta charSet="UTF-8" />

          {/* Meta viewport for responsiveness */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />

          {/* Meta description for SEO */}
          <meta
            name="description"
            content="Your website description goes here. It should be unique and contain primary keywords."
          />

          {/* Preconnect to Google Fonts servers */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Preloading key Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon for branding */}
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph meta tags for better link sharing */}
          <meta property="og:title" content="Your Website Title" />
          <meta property="og:description" content="Your website description." />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
