// import Layout from "../components/layout"
import Head from "next/head"
import Header from "../components/header"
import Comments from "../components/comments"
import OtherServices from "../components/otherServices"
import Prices from "../components/prices"
import RoadMap from "../components/roadMap"
import Layout from "../components/layout"

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Aanasayfa</title>
      </Head>
      <Header />
      <RoadMap />
      <Prices />
      <OtherServices />
      {/* <Comments /> */}
    </Layout>
  )
}

export default HomePage
