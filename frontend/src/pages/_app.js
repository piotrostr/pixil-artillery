import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import '@fontsource/nunito-sans/900.css'
import '@fontsource/nunito-sans/800.css'
import '@fontsource/nunito-sans/700.css'
import '@fontsource/nunito-sans/600.css'
import '@fontsource/nunito-sans'
import '@fontsource/nunito-sans/400.css'
import '@fontsource/nunito-sans/300.css'
import '@fontsource/nunito-sans/200.css'
import "@fontsource/orbitron/900.css"
import "@fontsource/orbitron"

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito Sans;
    scroll-behavior: smooth;
    background: rgb(202, 170, 217);
  }
  a {
    text-decoration: none;
    color: black;
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
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
