// import Layout from "../components/layout"
import Head from "next/head"
import Banner from "../components/banner"
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
      <Prices />
    </>
  )
}

export default HomePage
