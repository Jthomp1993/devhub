import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head> 
            <meta name="image" content="%PUBLIC_URL%/og.png" />
            <meta property="og:title" content="DevHub." />
            <meta property="og:description" content="A web app for networking with developers across the globe." />
            <meta property="og:image" content="%PUBLIC_URL%/og.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="%PUBLIC_URL%/og.png" />
            <meta name="twitter:creator" content="@joshua_thompson" />
            <meta name="twitter:title" content="DevHub." />
            <meta name="twitter:description" content="A web app for networking with developers across the globe." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
