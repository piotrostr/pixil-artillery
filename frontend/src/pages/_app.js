import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function getLibrary(provider) {
  const library = new Web3(provider)
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
