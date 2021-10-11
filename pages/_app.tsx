import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
export default MyApp
