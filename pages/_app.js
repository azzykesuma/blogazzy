import '../styles/globals.css'
import Layout from '../Component/Layout'
import Head from 'next/head'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography : {
      fontFamily : 'Source Sans Pro'
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
