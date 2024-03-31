import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* It's a good practice to specify a lang attribute */}
        <Head>
          {/* Preload fonts for performance */}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,700&display=swap" as="style" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200&display=swap" as="style" />

          {/* Stylesheet links for fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200&display=swap" rel="stylesheet" />

          {/* Add other global head elements or custom fonts here */}
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
