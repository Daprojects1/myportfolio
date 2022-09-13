import { useCallback } from 'react';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import '../styles/globals.css'
import '../styles/home.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0"
      }}
        options={tsConfig}
      /> */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
