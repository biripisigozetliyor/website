// import Layout from "../components/layout"
import Head from "next/head"
import Banner from "../components/banner"
import Comments from "../components/comments"
import OtherServices from "../components/otherServices"
import Prices from "../components/prices"
import RoadMap from "../components/roadMap"

function HomePage() {
  return (
    <>
      <Head>
        <title>Aanasayfa</title>
      </Head>
      <Banner />
      <RoadMap />
      {/* <Prices />
      <OtherServices />
      <Comments /> */}
    </>
  )
}

export default HomePage
