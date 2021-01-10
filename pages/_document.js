import Document, { Html, Head, Main, NextScript } from "next/document";

// This is the standard way to import fonts into the document
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Fast Feedback</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
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
