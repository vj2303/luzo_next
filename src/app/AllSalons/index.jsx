import Salons from "./Salons"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
                <meta name="description" content="All Salons | LUZO" />
                <title>All Salons | LUZO</title>
                {/* <base href='https://www.luzo.app' />  */}
      </Helmet>

        <Navbar />
        <Salons />
        <Footer />
    </div>
  )
}

export default index