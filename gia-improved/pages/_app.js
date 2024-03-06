import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

export default function App({ Component, pageProps }) {
  return <ThirdwebProvider activeChain="ethereum" clientId="your-client-id"> 
  <Component {...pageProps} />
  </ThirdwebProvider>
}

     