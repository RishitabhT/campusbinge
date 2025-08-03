import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/animate.css'
import '../styles/fontawesome.css';
import '../styles/themify-icons.css';
import '../styles/animate.css';
import '../styles/sass/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Campus Binge</title>
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
